<script>
    export let error;
</script>

<svelte:head>
    <title>Erreur {error?.status || '404'}</title>
</svelte:head>

<main class="error-page">
    <h1>{error?.status === 404 ? "Page non trouvée" : "Une erreur est survenue"}</h1>
    <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512.01"><path fill-rule="nonzero" d="M189.76 8.78c68.25-18.29 137.48-7.17 194.22 25.59l.76.47c56.37 32.82 100.29 87.02 118.48 154.93 18.29 68.25 7.17 137.47-25.59 194.21l-.47.76c-32.82 56.37-87.02 100.29-154.93 118.49-58.69 15.73-118.1 9.7-169.67-13.12-20.14-8.91-39.15-20.48-56.36-34.21-41.26-32.92-72.73-78.82-87.43-133.66-18.27-68.22-7.16-137.43 25.6-194.16C67.13 71.32 121.53 27.06 189.76 8.78zm-58.14 369.67a3.096 3.096 0 0 1-4.38.01l-9.64-9.58a3.118 3.118 0 0 1-.39-4.1c10.84-14.75 23.3-27.16 36.86-37.26 30.2-22.47 65.91-33.48 101.6-33.32 35.67.17 71.34 11.49 101.48 33.63 13.86 10.19 26.56 22.69 37.56 37.44.97 1.22.88 3-.25 4.12l-9.26 9.23a3.12 3.12 0 0 1-4.4 0c-2.03-1.99-4.04-3.91-6.19-5.77-30.22-26.27-74.7-39.8-119.05-40.02-44.18-.22-88.15 12.77-117.65 39.49-2.21 2-4.22 4.02-6.29 6.13zm210.37-231.89c12.47 18.04 12.47 46.92 0 64.97-12.89 18.67-34.64 18.66-47.54 0-12.46-18.05-12.46-46.93 0-64.97 12.9-18.67 34.65-18.67 47.54 0zm-120.72 0c12.46 18.04 12.46 46.92 0 64.97-12.9 18.66-34.65 18.67-47.54 0-12.46-18.05-12.46-46.93 0-64.97 12.89-18.67 34.64-18.67 47.54 0zm149.1-88.69c-50.68-29.26-112.55-39.18-173.59-22.83C135.74 51.4 87.11 90.92 57.87 141.58 28.6 192.27 18.68 254.16 35.04 315.22c13.7 51.13 43.66 93.55 82.8 123.17a230.483 230.483 0 0 0 48.48 28.09c45.43 19.39 97.46 24.27 148.89 10.49 60.8-16.29 109.27-55.55 138.55-105.92l.37-.68c29.26-50.67 39.18-112.55 22.83-173.58C460.67 136 421.41 87.53 371.05 58.24l-.68-.37z"/></svg>
    <p>{error?.message || "Désolé, la page que vous recherchez n'existe pas."}</p>
    <a href="/" class="back-home">Retour à l'accueil</a>
</main>

<style>
    *{
        margin:20px;
    }
    .error-page {
        text-align: center;
        padding: 50px;
    }
    h1 {
        font-size: 2em;
        color: red;
    }
    p {
        font-size: 1.2em;
    }

    svg{
        height: 10em;
        margin: auto;
    }
    .back-home {
        display: inline-block;
        margin-top: 20px;
        padding: 10px 20px;
        background: #007bff;
        color: white;
        text-decoration: none;
        border-radius: 5px;
    }
</style>
