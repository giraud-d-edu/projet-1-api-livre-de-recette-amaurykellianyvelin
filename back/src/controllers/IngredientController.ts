import * as ingredientService from "../services/IngredientService.ts";
import {Context, ObjectId} from "../../deps.ts";
import BadRequest from "../errors/BadRequest.ts";
import {validateIngredientDTO} from "./validations/IngredientValidation.ts";
import {sendErrorResponse} from "./validations/errors.ts";

export const createIngredient = async (ctx: Context) => {
    const body = await ctx.request.body.json();

    const validationError = validateIngredientDTO(body);
    if (validationError) {
        sendErrorResponse(ctx, 400, validationError);
        return;
    }
    const ingredient = await ingredientService.createIngredient(body);
    ctx.response.status = 201;
    ctx.response.body = {
        message: "Ingrédient créé avec succès.",
        ingredient,
    };
};

export const getIngredients = async (ctx: Context) => {
    const ingredients = await ingredientService.getIngredients();

    ctx.response.status = 200;
    ctx.response.body = {
        ingredients
    };
}

export const getIngredientById = async (ctx: Context) => {
    const id = ctx.params.id;

    if (!ObjectId.isValid(id)) {
        throw new BadRequest(
            "ID invalide : doit être un ObjectId"
        );
    }

    const ingredient = await ingredientService.getIngredientById(id);
    ctx.response.status = 200;
    ctx.response.body = {
        ingredient
    };
}

export const updateIngredient = async (ctx: Context) => {
    const id = ctx.params.id;
    if (!ObjectId.isValid(id)) {
        throw new BadRequest(
            "ID invalide : doit être un ObjectId"
        );
    }

    const body = await ctx.request.body.json();
    const validationError = validateIngredientDTO(body);
    if (validationError) {
        sendErrorResponse(ctx, 400, validationError);
        return;
    }
    await ingredientService.updateIngredient(id, body);
    ctx.response.status = 200;
    ctx.response.body = {
        message: "Ingrédient mis à jour avec succès.",
    };
};

export const deleteIngredient = async (ctx: Context) => {
    const id = ctx.params.id;

    if (!ObjectId.isValid(id)) {
        throw new BadRequest(
            "ID invalide : doit être un ObjectId"
        );
    }

    await ingredientService.deleteIngredient(id);
    ctx.response.status = 200;
    ctx.response.body = {
        message: "Ingrédient supprimé avec succès."
    };
}