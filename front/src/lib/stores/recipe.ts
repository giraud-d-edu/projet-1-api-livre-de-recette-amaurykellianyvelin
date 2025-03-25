import { writable } from "svelte/store";
import {getRecetteById, getRecettes} from "../services/api.js";

export interface Recette {
    id: string;
    name: string;
    preparation_time: number;
    cooking_time: number;
    ingredients: { ingredient_id: string; quantity: string }[];
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
        const data = await getRecetteById(id)
        recette.set(data);
    } catch (error) {
        console.error("Erreur lors du chargement de la recettes :", error);
    }
}