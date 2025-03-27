const API_BASE_URL = "http://localhost:8000";

async function fetchAPI(endpoint, method = "GET", data = null) {
    try {
        const options = {
            method,
            headers: { "Content-Type": "application/json" },
        };
        if (data) options.body = JSON.stringify(data);

        const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
        if (!response.ok) throw new Error(`Erreur API (${response.status})`);

        return await response.json();
    } catch (error) {
        console.error(`Erreur lors de la requête ${method} ${endpoint} :`, error);
        return { success: false, message: error.message };
    }
}

// Gestion des Recettes 
export const createRecette = (data) => fetchAPI("/recipes", "POST", data);
export const getRecettes = () => fetchAPI("/recipes");
export const getRecetteById = (id) => fetchAPI(`/recipes/${id}`);
export const updateRecette = (id, data) => fetchAPI(`/recipes/${id}`, "PUT", data);
export const deleteRecette = (id) => fetchAPI(`/recipes/${id}`, "DELETE");

// Gestion des Ingrédients
export const createIngredient = (data) => fetchAPI("/ingredients", "POST", data);
export const getIngredients = () => fetchAPI("/ingredients");
export const getIngredientById = (id) => fetchAPI(`/ingredients/${id}`);
export const updateIngredient = (id, data) => fetchAPI(`/ingredients/${id}`, "PUT", data);
export const deleteIngredient = (id) => fetchAPI(`/ingredients/${id}`, "DELETE");