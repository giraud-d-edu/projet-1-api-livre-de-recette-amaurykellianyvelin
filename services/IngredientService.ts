import * as ingredientRepository from "../repositories/IngredientRepository.ts";
import { Ingredient } from "../models/Ingredient.ts";

export const createIngredient = (ingredient: Ingredient) => {
    const ingredientWithDate = {
        ...ingredient,
        createdAt: new Date(),
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
    return ingredientRepository.updateIngredient(id, ingredient);
}

export const deleteIngredient = (id: string) => {
    return ingredientRepository.deleteIngredient(id);
}