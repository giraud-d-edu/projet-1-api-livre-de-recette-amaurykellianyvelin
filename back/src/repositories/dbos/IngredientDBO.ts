import { ObjectId } from "../../../deps.ts";
import { Ingredient } from "../../services/models/Ingredient.ts";

export interface IngredientDBO {
    _id: ObjectId;
    name: string;
    category: string;
    createdDate: Date;
    updatedDate: Date;
}

export function convertToIngredient(ingredientDBO: IngredientDBO): Ingredient {
    return {
        id: ingredientDBO._id.toString(),
        name: ingredientDBO.name,
        category: ingredientDBO.category,
        createdDate: ingredientDBO.createdDate,
        updatedDate: ingredientDBO.updatedDate,
    };
}