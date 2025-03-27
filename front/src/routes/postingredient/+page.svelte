<script>
    import { createIngredient } from "../../lib/services/api";
    import { writable } from "svelte/store";

    let name = "";
    let category = "";
    let errorMessage = writable("");
    let successMessage = writable("");

    const categories = [
        "Légume", "Fruit", "Viande", "Poisson", "Laitier", "Épice", "Céréale", "Condiment", "Herbe aromatique", "Oléagineux", "Boisson", "Produit sucré"
    ];

    async function handleSubmit() {
        errorMessage.set("");
        successMessage.set("");
        
        if (!name.trim()) {
            errorMessage.set("Le nom de l'ingrédient est requis.");
            return;
        }

        if (!category.trim()) {
            errorMessage.set("La catégorie de l'ingrédient est requise.");
            return;
        }

        try {
            const response = await createIngredient({ name, category });
            if (response) {
                successMessage.set("Ingrédient ajouté avec succès !");
                name = "";
                category = "";
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
        <label for="name" class="block mb-2">Nom de l'ingrédient :</label>
        <input 
            id="name"
            type="text" 
            bind:value={name} 
            class="w-full p-2 border rounded mb-4"
            placeholder="Ex : Tomate"
        />

        <label for="category" class="block mb-2">Catégorie :</label>
        <select 
            id="category"
            bind:value={category} 
            class="w-full p-2 border rounded mb-4">
            <option value="" disabled selected>Choisir une catégorie</option>
            {#each categories as cat}
                <option value={cat}>{cat}</option>
            {/each}
        </select>
        
        <button 
            type="submit" 
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Ajouter
        </button>
    </form>
</main>
