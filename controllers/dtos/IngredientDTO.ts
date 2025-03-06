import { Ingredient } from "../../models/ingredient";

export interface IngredientDTO {
    name: string;
    createdDate?: Date;
    updatedDate?: Date;
}

export function toIngredientDTO(ingredient: Ingredient): Ingredient {
    return {
        name: ingredient.name,
        createdDate: ingredient.createdDate,
        updatedDate: ingredient.updatedDate
    };
}