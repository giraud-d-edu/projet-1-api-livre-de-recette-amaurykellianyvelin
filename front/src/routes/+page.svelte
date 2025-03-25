<script>
  import { page } from '$app/stores';
  import { recettes, loadRecettes } from '$lib/stores/recipe.ts';
  import {onMount} from "svelte";
  onMount(loadRecettes);
</script>

<h1>Nos Recettes</h1>

<div class="grid">
  {#each $recettes as recette}
    <div class="recette">
      <h2>{recette.name}</h2>
      <p>{recette.instructions}</p>
      <a href={`/recipe/${recette.id}`}>
        <button>Voir détails</button>
    </div>
  {/each}
</div>

<main>
  <slot />
</main>

<style>
  nav {
    background-color: #f5f5f5;
    padding: 1em;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-right: 1em;
  }

  .active {
    font-weight: bold;
  }

  main {
    padding: 1em;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1em;
  }

  .produit, .recette {
    border: 1px solid #ddd;
    padding: 1em;
    border-radius: 8px;
    text-align: center;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.5em 1em;
    margin-top: 0.5em;
    cursor: pointer;
    border-radius: 5px;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>
