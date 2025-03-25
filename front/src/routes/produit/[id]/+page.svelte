<script>
    import { page } from '$app/stores';
    import { onMount } from "svelte";
    import {loadRecettes, loadRecettesById} from "$lib/stores/produits.js";

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

<h1>Détails du produit {id}</h1>
<p>Cette page affiche les détails du produit avec l'ID {id}.</p>
