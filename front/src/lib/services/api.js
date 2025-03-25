const API_BASE_URL = "http://localhost:8000";

export async function createIngredient(data) {
    return fetch(`${API_BASE_URL}/ingredients`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then(res => res.json());
}

export async function getIngredients() {
    return fetch(`${API_BASE_URL}/ingredients`)
        .then(res => res.json());
}

export async function getIngredientById(id) {
    return fetch(`${API_BASE_URL}/ingredients/${id}`)
        .then(res => res.json());
}

export async function updateIngredient(id, data) {
    return fetch(`${API_BASE_URL}/ingredients/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then(res => res.json());
}

export async function deleteIngredient(id) {
    return fetch(`${API_BASE_URL}/ingredients/${id}`, {
        method: "DELETE"
    }).then(res => res.json());
}

export async function createRecette(data) {
    try {
        const response = await fetch(`${API_BASE_URL}/recipes`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        if (response.status !== 201) {
            throw new Error(`Erreur API (${response.status})`);
        }

        const responseData = await response.json();

        if (!responseData || !responseData.recette) {
            console.warn("Format inattendu de la réponse API :", responseData);
            return { success: false, message: "Réponse API invalide" };
        }

        return { success: true, data: responseData.recette };
    } catch (error) {
        console.error("Erreur lors de la création de la recette :", error);
        return { success: false, message: error.message };
    }
}



export async function getRecettes() {
    try {
        const response = await fetch("http://localhost:8000/recipes");
        if (!response.ok) {
            throw new Error(`Erreur API (${response.status})`);
        }
        const data = await response.json();
        if (!data || !Array.isArray(data.recettes)) {
            console.warn("Format inattendu de la réponse API :", data);
            return { recettes: [] };
        }

        return data;
    } catch (error) {
        console.error("Erreur fetch recettes :", error);
        return { recettes: [] };
    }
}



export async function getRecetteById(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/recipes/${id}`);
        if (!response.ok) {
            throw new Error(`Erreur API (${response.status})`);
        }

        const data = await response.json();
        if (!data || typeof data !== "object") {
            console.warn("Format inattendu de la réponse API :", data);
            return null;
        }

        return data;
    } catch (error) {
        console.error("Erreur fetch recette par ID :", error);
        return null;
    }
}


export async function updateRecette(id, data) {
    return fetch(`${API_BASE_URL}/recipes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then(res => res.json());
}

export async function deleteRecette(id) {
    return fetch(`${API_BASE_URL}/recipes/${id}`, {
        method: "DELETE"
    }).then(res => res.json());
}
