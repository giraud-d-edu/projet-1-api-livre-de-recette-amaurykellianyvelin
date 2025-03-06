import { Ingredient } from "../../models/Ingredient.ts";

export interface IngredientDTO {
    name: string;
}

export function convertToIngredientDto(ingredient: Ingredient): IngredientDTO {
    return {
        name: ingredient.name
    };
}