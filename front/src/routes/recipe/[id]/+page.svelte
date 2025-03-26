<script>
    import { page } from '$app/stores';
    import { onMount } from "svelte";
    import {recette, loadRecettesById} from "$lib/stores/recipe.js";

    let id;
    $: id = $page.params.id;

    onMount(() => {
        if (id) {
            loadRecettesById(id);
        } else {
            console.error("Aucun ID reçu !");
        }
    });
</script>

<h1>Détails de la recette</h1>

{#if $recette}
    <h2>{ $recette.name }</h2>
    <p><strong>Temps de préparation :</strong> { $recette.preparation_time } min</p>
    <p><strong>Temps de cuisson :</strong> { $recette.cooking_time } min</p>

    <h3>Ingrédients :</h3>
    <ul>
        {#each $recette.ingredients as ingredient}
            <li>{ingredient.quantity} - {ingredient.ingredient_id}</li>
        {/each}
    </ul>

    <h3>Instructions :</h3>
    <p>{ $recette.instructions }</p>
{:else}
    <p>Chargement des données...</p>
{/if}