<script>
    export let title = '';
    export let message = '';
    export let onConfirm = () => {};
    export let onCancel = () => {};
    
    let showModal = false;

    export function open() {
        showModal = true;
    }

    export function close() {
        showModal = false;
    }
</script>

{#if showModal}
    <div class="modal">
        <div class="modal-content">
            <h3>{title}</h3>
            <p>{message}</p>
            <div class="modal-buttons">
                <button on:click={onConfirm} class="confirm-btn">Oui, supprimer</button>
                <button on:click={onCancel} class="cancel-btn">Annuler</button>
            </div>
        </div>
    </div>
{/if}

<style>
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .modal-content {
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        text-align: center;
        width: 300px;
    }

    .modal-buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

    .modal-content button {
        padding: 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        width: 45%;
    }

    .confirm-btn {
        background-color: red;
        color: white;
    }

    .confirm-btn:hover {
        background-color: darkred;
    }

    .cancel-btn {
        background-color: gray;
        color: white;
    }

    .cancel-btn:hover {
        background-color: darkgray;
    }
</style>
