<script>
    import { ingredients, loadIngredients } from "$lib/stores/ingredients";
    import { onMount } from "svelte";
    onMount(loadIngredients);
</script>

<h1>Nos Ingredients</h1>

<div class="grid">
    {#each $ingredients as ingredient}
        <div class="ingredient">
            <h2>{ingredient.name}</h2>
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
  
    .ingredient {
      border: 1px solid #ddd;
      padding: 1em;
      border-radius: 8px;
      text-align: center;
    }
  </style>