<script>
  import { recettes, loadRecettes } from "$lib/stores/recipe";
  import { onMount } from "svelte";
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
      </a>
    </div>
  {/each}
</div>

<main>
  <slot />
</main>

<style>
  main {
    padding: 1em;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1em;
  }

  .recette {
    border: 1px solid #ddd;
    padding: 1em;
    border-radius: 8px;
    text-align: center;
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
