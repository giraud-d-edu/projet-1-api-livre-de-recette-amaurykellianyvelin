import * as ingredientRepository from "../repositories/IngredientRepository.ts";
import { Ingredient } from "../models/Ingredient.ts";
import { convertToIngredientDto } from "../controllers/dtos/IngredientDTO.ts"

export const createIngredient = (ingredient: Ingredient) => {
    const ingredientWithDate = {
        ...ingredient,
        createdDate: new Date(),
    };
    return ingredientRepository.createIngredient(ingredientWithDate)
        .then((ingredient) => {
            return convertToIngredientDto(ingredient);
        });
}

export const getIngredients = () => {
    return ingredientRepository.getIngredients()
        .then((ingredients) => {
            return ingredients.map((ingredient) => convertToIngredientDto(ingredient));
        });
}

export const getIngredientById = (id: string) => {
    return ingredientRepository.getIngredientById(id)
        .then((ingredient) => {
            return convertToIngredientDto(ingredient);
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