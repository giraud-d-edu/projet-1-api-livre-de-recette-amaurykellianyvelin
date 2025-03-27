<script>
    import { page } from '$app/stores';
    import { onMount } from "svelte";
    import {recette, loadRecettesById, deleteRecetteById} from "$lib/stores/recipe.js";
    import Modal from '../../../lib/components/Modal.svelte';
    import { goto } from '$app/navigation';

    let id;
    let modal;
    $: id = $page.params.id;

    onMount(() => {
        if (id) {
            loadRecettesById(id);
        } else {
            console.error("Aucun ID reçu !");
        }
    });

    async function confirmDelete() {
        try {
            await deleteRecetteById(id);
            console.log("Recette supprimée");
            modal.close();
            goto('/');
        } catch (error) {
            console.error("Erreur lors de la suppression de la recette", error);
        }
    }

    function cancelDelete() {
        modal.close();
    }
</script>

<h1>Détails de la recette</h1>

{#if $recette}
    <h2>{ $recette.name }</h2>
    <p><strong>Temps de préparation :</strong> { $recette.preparation_time } min</p>
    <p><strong>Temps de cuisson :</strong> { $recette.cooking_time } min</p>

    <h3>Ingrédients :</h3>
    <ul>
        {#each $recette.ingredients as ingredient}
            <li>{ingredient.name} - {ingredient.quantity}</li>
        {/each}
    </ul>

    <h3>Instructions :</h3>
    <p>{ $recette.instructions }</p>

    <button on:click={() => modal.open()} class="delete-btn">
        🗑️ Supprimer la recette
    </button>

    <Modal
        bind:this={modal}
        title="Êtes-vous sûr de vouloir supprimer cette recette ?"
        message="Cette action est irréversible."
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
    />

{:else}
    <p>Chargement des données...</p>
{/if}

<style>
    .delete-btn {
        background-color: red;
        color: white;
        padding: 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
        margin-top: 20px;
    }

    .delete-btn:hover {
        background-color: darkred;
    }
</style>