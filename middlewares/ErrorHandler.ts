import { Context } from "https://deno.land/x/oak@v17.1.4/mod.ts";
import NotFound from '../errors/NotFound.ts';
import BadRequest from "../errors/BadRequest.ts";

export const errorHandler = async (ctx: Context, next: () => Promise<void>) => {
    try {
        await next();
    } catch (error) {
        console.error("Erreur : ", error.message + " - code " + error.statusCode);
        if (error instanceof NotFound) {
            ctx.response.status = error.statusCode;
            ctx.response.body = { message: error.message };
        }
        else if (error instanceof BadRequest) {
            ctx.response.status = error.statusCode;
            ctx.response.body = { message: error.message };
        }
        else {
            ctx.response.status = 500;
            ctx.response.body = { message: "Erreur serveur interne" };
        }
    }
};