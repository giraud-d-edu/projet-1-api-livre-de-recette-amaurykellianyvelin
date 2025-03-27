import { writable } from "svelte/store";
import {getIngredientById, getRecetteById, getRecettes, deleteRecette} from "../services/api.js";

export interface IngredientDetail {
    id: string;
    name: string;
    quantity: string;
}

export interface Recette {
    id: string;
    name: string;
    preparation_time: number;
    cooking_time: number;
    ingredients: IngredientDetail[];
    instructions: string;
    createdDate: Date;
    updatedDate: Date;
}

export const recettes = writable<Recette[]>([]);
export const recette = writable<Recette>();

export async function loadRecettes() {
    try {
        const data = await getRecettes();
        recettes.set(data.recettes || []);
    } catch (error) {
        console.error("Erreur lors du chargement des recettes :", error);
        recettes.set([]);
    }
}

export async function loadRecettesById(id: string){
    try {
        const data = await getRecetteById(id);
        if (data && data.recette) {
            const ingredientsDetails = await Promise.all(
                data.recette.ingredients.map(async (ing) => {
                    const ingredientData = await getIngredientById(ing.ingredient_id);
                    return {
                        id: ing.ingredient_id,
                        name: ingredientData.ingredient.name,
                        quantity: ing.quantity
                    };
                })
            );

            recette.set({ ...data.recette, ingredients: ingredientsDetails });
        } else {
            console.error("Aucune recette trouvée pour l'ID :", id);
        }
    } catch (error) {
        console.error("Erreur lors du chargement de la recettes :", error);
    }
}

export async function deleteRecetteById(id: string) {
    try {
        const response = await deleteRecette(id);
        if (response.success) {
            recettes.update((currentRecettes) => currentRecettes.filter((recette) => recette.id !== id));
            console.log("Recette supprimée avec succès");
        } else {
            console.error("Erreur lors de la suppression de la recette");
        }
    } catch (error) {
        console.error("Erreur lors de la suppression de la recette :", error);
    }
}
