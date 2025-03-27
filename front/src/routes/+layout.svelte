<script>
    import {page} from '$app/stores';

</script>

<nav>
    <ul>
        <li>
            <a class:active={$page.url.pathname === '/'} href="/">Accueil</a>
        </li>
        <li>
            <a class:active={$page.url.pathname === '/about'} href="/about">À propos</a>
        </li>
        <li>
            <a class:active={$page.url.pathname === '/contact'} href="/contact">Contact</a>
        </li>
        <li>
            <a class:active={$page.url.pathname === '/postrecipe'} href="/postrecipe">Créer Recette</a>
        </li>
        <li>
            <a class:active={$page.url.pathname === '/ingredient'} href="/ingredient">Ingredients</a>
        </li>
        <li>
            <a class:active={$page.url.pathname === '/postingredient'} href="/postingredient">Créer Ingredient</a>
        </li>
    </ul>
</nav>

<main>
    <slot/>
</main>

<style>

    nav {
        background-color: #515151;
        padding: 10px;
    }

    ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        font-size: larger;
        color: #f1f1f1;
        padding: 10px;
        border-radius: 10px;
    }

    a:hover {
        background: #ededed;
        color: #000000;
    }

    li {
        padding: 10px;
    }

    .active {
        border-radius: 10px;
        background: #139c00;
    }
    .active:hover{
        background: #139c00;
        color: #f1f1f1;
    }

    main {
        padding: 1em;
    }
</style>
