import { writable } from "svelte/store";
import {getIngredientById, getIngredients} from "../services/api.js";
import type {Ingredient} from "$lib/models/IIngredient";

export const ingredients = writable<Ingredient[]>([]);
export const ingredient = writable<Ingredient | null>(null);

export async function loadIngredients() {
    try {
        const data = await getIngredients();
        ingredients.set(data.ingredients || []);
    } catch (error) {
        console.error("Erreur lors du chargement des ingrédients :", error);
        ingredients.set([]);
    }
}

export async function loadIngredientById(id: string) {
    try {
        const data = await getIngredientById(id);
        if (data) {
            ingredient.set(data.ingredient);
        } else {
            console.error("Aucun ingrédient trouvé pour l'ID :", id);
            ingredient.set(null);
        }
    } catch (error) {
        console.error("Erreur lors du chargement de l'ingrédient :", error);
        ingredient.set(null);
    }
}
