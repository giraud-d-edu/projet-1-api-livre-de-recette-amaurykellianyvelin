import { ObjectId } from "../../deps.ts";
import { Recette } from "../../models/Recette.ts";

export interface RecetteDBO {
    _id: ObjectId;
    name: string;
    preparation_time: number;
    cooking_time: number;
    ingredients: { ingredient_id: string; quantity: string }[]; // TODO : Utiliser IngredientDbo[] - en l'état il n'y a pas de lien avec vos entités Ingrédient et recette
    instructions: string;
    createdDate: Date;
    updatedDate: Date;
}

export function convertToRecette(recetteDBO: RecetteDBO): Recette {
    return {
        id: recetteDBO._id.toString(),
        name: recetteDBO.name,
        preparation_time: recetteDBO.preparation_time,
        cooking_time: recetteDBO.cooking_time,
        ingredients: recetteDBO.ingredients,
        instructions: recetteDBO.instructions,
        createdDate: recetteDBO.createdDate,
        updatedDate: recetteDBO.updatedDate,
    };
}

