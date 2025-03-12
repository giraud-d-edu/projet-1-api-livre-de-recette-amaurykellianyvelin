import { Recette } from "../../models/Recette.ts";

export interface RecetteDTO {
    id: string;
    name: string;
    preparation_time: number;
    cooking_time: number;
    ingredients: { ingredient_id: string; quantity: string }[]; // TODO : Utiliser IngredientDTO[]
    instructions: string;
}

export function convertToRecetteDto(recette: Recette): RecetteDTO {
    return {
        id: recette.id,
        name: recette.name,
        preparation_time: recette.preparation_time,
        cooking_time: recette.cooking_time,
        ingredients: recette.ingredients,
        instructions: recette.instructions
    };
}

