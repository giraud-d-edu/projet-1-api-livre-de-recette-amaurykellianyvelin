<script>
  import { page } from '$app/stores';
  import { recettes, loadRecettes } from '$lib/stores/produits.js';
  import {onMount} from "svelte";

  let produits = [
    {
      id: 1,
      titre: "Produit 1",
      description: "Description du produit 1",
      image: "https://picsum.photos/300/200?random=1"
    },
    {
      id: 2,
      titre: "Produit 2",
      description: "Description du produit 2",
      image: "https://picsum.photos/300/200?random=2"
    },
    {
      id: 3,
      titre: "Produit 3",
      description: "Description du produit 3",
      image: "https://picsum.photos/300/200?random=3"
    }
  ];

  onMount(loadRecettes);
</script>

<nav>
  <ul>
    <li class:active={$page.url.pathname === '/'}>
      <a href="/">Accueil</a>
    </li>
    <li class:active={$page.url.pathname === '/about'}>
      <a href="/about">À propos</a>
    </li>
    <li class:active={$page.url.pathname === '/contact'}>
      <a href="/contact">Contact</a>
    </li>
    <li class:active={$page.url.pathname === '/postrecipe'}>
      <a href="/postrecipe">Create Recipe</a>
    </li>
  </ul>
</nav>

<h1>Nos produits</h1>

<div class="grid">
  {#each produits as produit}
    <div class="produit">
      <img src={produit.image} alt={produit.titre} />
      <h2>{produit.titre}</h2>
      <p>{produit.description}</p>
      <a href={`/produit/${produit.id}`}>
        <button>Voir détails</button>
      </a>
    </div>
  {/each}
</div>

<h1>Nos Recettes</h1>

<div class="grid">
  {#each $recettes as recette}
    <div class="recette">
      <h2>{recette.name}</h2>
      <p>{recette.instructions}</p>
      <a href={`/produit/${recette.id}`}>
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
