<script>
    import { recette, updateRecetteById } from '$lib/stores/recipe';
    import { writable } from 'svelte/store';
    import { onMount } from 'svelte';
    import { getIngredients } from '$lib/services/api';
    import { goto } from '$app/navigation';

    let name = "";
    let preparation_time = "";
    let cooking_time = "";
    let instructions = "";
    const availableIngredients = writable([])
    const ingredients = writable([]);
    const isSubmitting = writable(false);
    const errors = writable({
        name: "",
        preparation_time: "",
        cooking_time: "",
        ingredients: "",
        instructions: ""
    });
    onMount(() => {
        const currentRecette = $recette;
        if (currentRecette) {
            name = currentRecette.name;
            preparation_time = currentRecette.preparation_time;
            cooking_time = currentRecette.cooking_time;
            instructions = currentRecette.instructions;
            ingredients.set(currentRecette.ingredients.map(ingredient => ({
                ingredient_id: ingredient.id,
                quantity: ingredient.quantity,
            })));
        }
    });

    async function loadIngredients() {
        try {
            const data = await getIngredients();
            availableIngredients.set(data.ingredients || []);
        } catch (error) {
            console.error("Erreur lors du chargement des ingrédients :", error);
        }
    }

    loadIngredients();

    function addIngredient() {
        ingredients.update(list => [...list, { ingredient_id: "", quantity: "" }]);
    }

    function removeIngredient(index) {
        ingredients.update(list => list.filter((_, i) => i !== index));
    }

    function validateForm() {
        let newErrors = {
            name: "",
            preparation_time: "",
            cooking_time: "",
            ingredients: "",
            instructions: ""
        };
        let isValid = true;

        if (!name.trim()) {
            newErrors.name = "Le nom est requis.";
            isValid = false;
        }

        if (!preparation_time || isNaN(preparation_time) || preparation_time < 0) {
            newErrors.preparation_time = "Temps de préparation invalide.";
            isValid = false;
        }

        if (!cooking_time || isNaN(cooking_time) || cooking_time < 0) {
            newErrors.cooking_time = "Temps de cuisson invalide.";
            isValid = false;
        }

        ingredients.update(list => {
            if (list.some(ing => !ing.ingredient_id || !ing.quantity.trim())) {
                newErrors.ingredients = "Chaque ingrédient doit être sélectionné et la quantité doit être renseignée.";
                isValid = false;
            }
            return list;
        });

        if (!instructions.trim()) {
            newErrors.instructions = "Les instructions sont requises.";
            isValid = false;
        }

        errors.set(newErrors);
        return isValid;
    }

    async function submitForm() {
        if (!validateForm()) return;

        isSubmitting.set(true);
        const updatedRecipeData = {
            name,
            preparation_time: Number(preparation_time),
            cooking_time: Number(cooking_time),
            ingredients: $ingredients,
            instructions
        };

        try {
            await updateRecetteById($recette.id, updatedRecipeData);
            goto(`/recipe/${$recette.id}`);
        } catch (error) {
            console.error("Erreur lors de la mise à jour de la recette", error);
        } finally {
            isSubmitting.set(false);
        }
    }
</script>

<h1>Modifier la recette</h1>

{#if $errors.name || $errors.preparation_time || $errors.cooking_time || $errors.ingredients || $errors.instructions}
    <p class="error">Veuillez corriger les erreurs ci-dessus.</p>
{/if}

<form on:submit|preventDefault={submitForm}>
    <label for="name">Nom :</label>
    <input type="text" id="name" bind:value={name} />
    <p class="error">{$errors.name}</p>

    <label for="preparation_time">Temps de préparation (min) :</label>
    <input type="number" id="preparation_time" bind:value={preparation_time} min="0" />
    <p class="error">{$errors.preparation_time}</p>

    <label for="cooking_time">Temps de cuisson (min) :</label>
    <input type="number" id="cooking_time" bind:value={cooking_time} min="0" />
    <p class="error">{$errors.cooking_time}</p>

    <label>Ingrédients :</label>
    {#each $ingredients as ing, index}
        <div class="ingredient-row">
            <select bind:value={$ingredients[index].ingredient_id}>
                <option value="">Sélectionner un ingrédient</option>
                {#each $availableIngredients as ingredient}
                <option value={ingredient.id} selected={ingredient.id === ing.ingredient_id}>
                    {ingredient.name}
                </option>
            {/each}
            </select>
            <input 
                type="text" 
                placeholder="Quantité" 
                bind:value={$ingredients[index].quantity}
                on:input={e => ingredients.update(ings => {
                    ings[index].quantity = e.target.value;
                    return [...ings];
                })}
            />
            <button type="button" on:click={() => removeIngredient(index)}>❌</button>
        </div>
    {/each}
    <button type="button" on:click={addIngredient}>+ Ajouter un ingrédient</button>
    <p class="error">{$errors.ingredients}</p>

    <label for="instructions">Instructions :</label>
    <textarea id="instructions" bind:value={instructions}></textarea>
    <p class="error">{$errors.instructions}</p>

    <button type="submit" disabled={$isSubmitting}>
        {$isSubmitting ? "Envoi en cours..." : "Mettre à jour la recette"}
    </button>
</form>

<style>
    form {
        max-width: 500px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    label {
        margin-top: 10px;
    }

    input, textarea {
        width: 100%;
        padding: 8px;
        margin-top: 5px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .error {
        color: red;
        font-size: 0.8em;
        margin: 5px 0;
    }

    button {
        margin-top: 15px;
        padding: 10px;
        border: none;
        background-color: #28a745;
        color: white;
        font-size: 1em;
        cursor: pointer;
        border-radius: 5px;
    }

    button:disabled {
        background-color: #ccc;
    }

    .ingredient-row {
        display: flex;
        gap: 10px;
        margin-bottom: 10px;
    }

    .ingredient-row input {
        flex: 1;
    }

    .ingredient-row button {
        background-color: red;
    }
</style>
