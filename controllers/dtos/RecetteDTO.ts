import { Recette } from "../../models/Recette.ts";

export interface RecetteDTO {
    name: string;
    preparation_time: number;
    cooking_time: number;
    ingredients: { ingredient_id: string; quantity: string }[];
    instructions: string;
}

export function convertToRecetteDto(recette: Recette): RecetteDTO {
    return {
        name: recette.name,
        preparation_time: recette.preparation_time,
        cooking_time: recette.cooking_time,
        ingredients: recette.ingredients,
        instructions: recette.instructions
    };
}

