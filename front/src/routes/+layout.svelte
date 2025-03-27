<script>
    import { page } from '$app/stores';
    import { onMount } from "svelte";
    import { loadRecettes } from '$lib/stores/recipe.ts';

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
        <li class:active={$page.url.pathname === '/ingredient'}>
            <a href="/ingredient">Ingredient</a>
        </li>
        <li class:active={$page.url.pathname === '/postingredient'}>
            <a href="/postingredient">Create Ingredient</a>
        </li>
    </ul>
</nav>

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
</style>
