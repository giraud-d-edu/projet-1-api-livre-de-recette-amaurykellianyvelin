import {Context, ObjectId} from "../deps.ts";
import * as recetteService from "../services/RecetteService.ts";
import BadRequest from "../errors/BadRequest.ts";
import {sendErrorResponse} from "./validations/errors.ts";
import {validateRecetteDTO} from "./validations/RecetteValidation.ts";

export const createRecette = async (ctx: Context) => {
    const body = await ctx.request.body.json();

    const validationError = validateRecetteDTO(body);
    if (validationError) {
        sendErrorResponse(ctx, 400, validationError);
        return;
    }

    const recette = await recetteService.createRecette(body);

    ctx.response.status = 201;
    ctx.response.body = {
        message: "Recette créé avec succès.",
        recette,
    };
};

export const getRecettes = async (ctx: Context) => {
    const recettes = await recetteService.getRecettes();

    ctx.response.status = 200;
    ctx.response.body = {
        recettes
    };
}

export const getRecetteById = async (ctx: Context) => {
    const id = ctx.params.id;

    if (!ObjectId.isValid(id)) {
        if (id === "coffee") {
            ctx.response.status = 418;
            ctx.response.body = {error: "I'm a teapot - ID cannot be 'coffee'"};
            return;
        }
        throw new BadRequest("Invalid ID: must be an ObjectId");
    }

    const recette = await recetteService.getRecetteById(id);
    ctx.response.status = 200;
    ctx.response.body = {
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
    ctx.response.status = 200;
    ctx.response.body = {
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

    const validationError = validateRecetteDTO(body);
    if (validationError) {
        sendErrorResponse(ctx, 400, validationError);
        return;
    }

    const body = await ctx.request.body.json();

    await recetteService.updateRecette(id, body);
    ctx.response.status = 200;
    ctx.response.body = {
        message: "Recette modifié avec succès."
    };
}
