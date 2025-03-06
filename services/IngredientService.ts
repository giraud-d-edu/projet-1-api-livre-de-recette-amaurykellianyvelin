import * as ingredientRepository from "../repositories/IngredientRepository.ts";
import { Ingredient } from "../models/Ingredient.ts";
import { convertToIngredientNameDto } from "../controllers/dtos/IngredientDTO.ts"

export const createIngredient = (ingredient: Ingredient) => {
    const ingredientWithDate = {
        ...ingredient,
        createdDate: new Date(),
    };
    return ingredientRepository.createIngredient(ingredientWithDate)
        .then((ingredient) => {
            return convertToIngredientNameDto(ingredient);
        });
}

export const getIngredients = () => {
    return ingredientRepository.getIngredients()
        .then((ingredients) => {
            return ingredients.map((ingredient) => convertToIngredientNameDto(ingredient));
        });
}

export const getIngredientById = (id: string) => {
    return ingredientRepository.getIngredientById(id)
        .then((ingredient) => {
            return convertToIngredientNameDto(ingredient);
        });
}

export const updateIngredient = (id: string, ingredient: Ingredient) => {
    const ingredientWithDate = {
        ...ingredient,
        updatedDate: new Date(),
    };
    return ingredientRepository.updateIngredient(id, ingredientWithDate);
}

export const deleteIngredient = (id: string) => {
    return ingredientRepository.deleteIngredient(id);
}