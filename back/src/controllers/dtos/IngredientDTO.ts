import { Ingredient } from "../../services/models/Ingredient.ts";

export interface IngredientDTO {
    id: string;
    name: string;
}

export function convertToIngredientDto(ingredient: Ingredient): IngredientDTO {
    return {
        id: ingredient.id,
        name: ingredient.name
    };
}