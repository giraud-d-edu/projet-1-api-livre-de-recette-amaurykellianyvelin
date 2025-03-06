import * as ingredientRepository from "../repositories/IngredientRepository.ts";
import { Ingredient } from "../models/Ingredient.ts";

export const createIngredient = (ingredient: Ingredient) => {
    const ingredientWithDate = {
        ...ingredient,
        createdDate: new Date(),
    };
    return ingredientRepository.createIngredient(ingredientWithDate);
}

export const getIngredients = () => {
    return ingredientRepository.getIngredients();
}

export const getIngredientById = (id: string) => {
    return ingredientRepository.getIngredientById(id);
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