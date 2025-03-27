<script>
    import { createIngredient } from "../../lib/services/api";
    import { writable } from "svelte/store";

    let name = "";
    let errorMessage = writable("");
    let successMessage = writable("");

    async function handleSubmit() {
        errorMessage.set("");
        successMessage.set("");
        
        if (!name.trim()) {
            errorMessage.set("Le nom de l'ingrédient est requis.");
            return;
        }

        try {
            const response = await createIngredient({ name });
            if (response) {
                successMessage.set("Ingrédient ajouté avec succès !");
                name = "";
            } else {
                errorMessage.set("Une erreur est survenue lors de l'ajout.");
            }
        } catch (error) {
            errorMessage.set("Erreur lors de l'ajout de l'ingrédient.");
            console.error(error);
        }
    }
</script>

<main class="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg">
    <h2 class="text-xl font-bold mb-4">Ajouter un ingrédient</h2>

    {#if $errorMessage}
        <p class="text-red-500">{$errorMessage}</p>
    {/if}
    {#if $successMessage}
        <p class="text-green-500">{$successMessage}</p>
    {/if}

    <form on:submit|preventDefault={handleSubmit}>
        <label class="block mb-2">Nom de l'ingrédient :</label>
        <input 
            type="text" 
            bind:value={name} 
            class="w-full p-2 border rounded mb-4"
            placeholder="Ex : Tomate"
        />
        <button 
            type="submit" 
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Ajouter
        </button>
    </form>
</main>