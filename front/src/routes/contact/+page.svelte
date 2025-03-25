<script>
    import { writable } from "svelte/store";

    let name = "";
    let email = "";
    let message = "";
    let successMessage = "";
    let isSubmitting = false;

    const errors = writable({ name: "", email: "", message: "" });

    function validateForm() {
        let newErrors = { name: "", email: "", message: "" };
        let isValid = true;

        if (!name.trim()) {
            newErrors.name = "Le nom est requis.";
            isValid = false;
        }

        if (!email.trim()) {
            newErrors.email = "L'email est requis.";
            isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            newErrors.email = "Email invalide.";
            isValid = false;
        }

        if (!message.trim()) {
            newErrors.message = "Le message ne peut pas être vide.";
            isValid = false;
        }

        errors.set(newErrors);
        return isValid;
    }

    async function submitForm() {
        if (!validateForm()) return;

        isSubmitting = true;
        successMessage = "";

        try {
            console.log("✅ Message envoyé :", { name, email, message });

            successMessage = "Message envoyé avec succès !";
            name = "";
            email = "";
            message = "";
            errors.set({ name: "", email: "", message: "" });
        } catch (error) {
            successMessage = "Une erreur est survenue.";
            console.error(error);
        } finally {
            isSubmitting = false;
        }
    }
</script>

<h1>Contactez-nous</h1>

{#if successMessage}
    <p class="success">{successMessage}</p>
{/if}

<form on:submit|preventDefault={submitForm}>
    <label for="name">Nom :</label>
    <input type="text" id="name" bind:value={name} />
    <p class="error">{$errors.name}</p>

    <label for="email">Email :</label>
    <input type="email" id="email" bind:value={email} />
    <p class="error">{$errors.email}</p>

    <label for="message">Message :</label>
    <textarea id="message" bind:value={message}></textarea>
    <p class="error">{$errors.message}</p>

    <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Envoi en cours..." : "Envoyer"}
    </button>
</form>

<style>
    form {
        max-width: 400px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    label {
        margin-top: 10px;
    }

    input, textarea {
        width: 100%;
        padding: 8px;
        margin-top: 5px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .error {
        color: red;
        font-size: 0.8em;
        margin: 5px 0;
    }

    .success {
        color: green;
        font-size: 1em;
        text-align: center;
        margin-bottom: 10px;
    }

    button {
        margin-top: 15px;
        padding: 10px;
        border: none;
        background-color: #28a745;
        color: white;
        font-size: 1em;
        cursor: pointer;
        border-radius: 5px;
    }

    button:disabled {
        background-color: #ccc;
    }
</style>
