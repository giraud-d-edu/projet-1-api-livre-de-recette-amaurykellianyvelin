import {Context, ObjectId} from "../deps.ts";
import * as recetteService from "../services/RecetteService.ts";
import * as ingredientService from "../services/IngredientService.ts";
import BadRequest from "../errors/BadRequest.ts";

export const createRecette = async (ctx: Context) => {
    const body = await ctx.request.body.json();

    const recette = await recetteService.createRecette(body);

    ctx.response.status = 201; ctx.response.body = {
        message: "Recette créé avec succès.",
        recette,
    };
};

export const getRecettes = async (ctx: Context) => {
    const recettes = await recetteService.getRecettes();

    ctx.response.status = 200; ctx.response.body = {
        recettes
    };
}

export const getRecetteById = async (ctx: Context) => {
    const id = ctx.params.id;

    if (!ObjectId.isValid(id)) {
        throw new BadRequest(
            "ID invalide : doit être un ObjectId"
        );
    }

    const recette = await recetteService.getRecetteById(id);
    ctx.response.status = 200; ctx.response.body = {
        recette
    };
}

export const deleteRecette = async (ctx: Context) => {
    const id = ctx.params.id;

    if (!ObjectId.isValid(id)) {
        throw new BadRequest(
            "ID invalide : doit être un ObjectId"
        );
    }

    await recetteService.deleteRecette(id);
    ctx.response.status = 200; ctx.response.body = {
        message: "Recette supprimé avec succès."
    };
}

export const updateRecette = async (ctx: Context) => {
    const id = ctx.params.id;

    if (!ObjectId.isValid(id)) {
        throw new BadRequest(
            "ID invalide : doit être un ObjectId"
        );
    }

    const body = await ctx.request.body.json();

    await recetteService.updateRecette(id, body);
    ctx.response.status = 200; ctx.response.body = {
        message: "Recette modifié avec succès."
    };
}
