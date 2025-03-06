import { Context } from "../../deps.ts";

export const sendErrorResponse = (ctx: Context, status: number, message: string) => {
    ctx.response.status = status;
    ctx.response.body = {
        message,
    };
};
