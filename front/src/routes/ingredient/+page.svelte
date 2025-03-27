<script>
    import { ingredients, loadIngredients } from "$lib/stores/ingredients";
    import { onMount } from "svelte";
    onMount(loadIngredients);

    const categories = [
        "Légume", "Fruit", "Viande", "Poisson", "Laitier", "Épice", "Céréale", "Condiment", "Herbe aromatique", "Oléagineux", "Boisson", "Produit sucré"
    ];

    let selectedCategory = '';
    let searchQuery = '';

    const filteredIngredients = () => {
        return $ingredients.filter(ingredient => {
            const matchesCategory = !selectedCategory || ingredient.category === selectedCategory;
            const matchesSearchQuery = ingredient.name.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearchQuery;
        });
    };

</script>

<h1>Nos Ingredients</h1>

<label for="search">Rechercher par nom : </label>
<input
    id="search"
    type="text"
    bind:value={searchQuery}
    placeholder="Rechercher un ingrédient..."
    aria-label="Rechercher un ingrédient"
/>

<label for="category">Filtrer par catégorie : </label>
<select id="category" bind:value={selectedCategory}>
    <option value="">Toutes les catégories</option>
    {#each categories as category}
        <option value={category}>{category}</option>
    {/each}
</select>

<div class="grid">
    {#each filteredIngredients() as ingredient}
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