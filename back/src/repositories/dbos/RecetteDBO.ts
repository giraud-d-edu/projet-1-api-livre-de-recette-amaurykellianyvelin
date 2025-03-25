import {ObjectId} from "../../../deps.ts";
import {Recette} from "../../services/models/Recette.ts";
import {IngredientDBO} from "./IngredientDBO.ts";

export interface RecetteDBO {
    _id: ObjectId;
    name: string;
    preparation_time: number;
    cooking_time: number;
    ingredients: IngredientDBO[];
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

