import * as ingredientService from "../services/IngredientService.ts";
import { Context } from "../deps.ts";

export const createIngredient = async (ctx: Context) => {
    const body = await ctx.request.body.json();

    const ingredient = await ingredientService.createIngredient(body);

    ctx.response.status = 201; ctx.response.body = {
        message: "Ingrédient créé avec succès.",
        ingredient,
    };
};

export const getIngredients = async (ctx: Context) => {
    const ingredients = await ingredientService.getIngredients();

    ctx.response.status = 201; ctx.response.body = {
        ingredients
    };
}
