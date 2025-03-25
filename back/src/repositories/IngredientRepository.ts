import { Ingredient } from "../models/Ingredient.ts";
import { ObjectId } from "../../deps.ts";
import { db } from "../config/database.ts";
import NotFound from "../errors/NotFound.ts";
import { convertToIngredient } from "./dbos/IngredientDBO.ts";

const collection = db.collection("ingredients");

export const createIngredient = async (ingredient: Ingredient): Promise<Ingredient> => {
    const result = await collection.insertOne(ingredient);

    if (result.acknowledged && result.insertedId) {
        return getIngredientById(result.insertedId.toString());
    }

    throw new Error("Erreur lors de la création de l'ingrédient.")
}

export const getIngredients = async (): Promise<Ingredient[]> => {
    const ingredientsDBO = await collection.find({}).toArray();
    return ingredientsDBO.map(convertToIngredient);
}

export const getIngredientById = async (id: string): Promise<Ingredient> => {
    const objectId = new ObjectId(id);
    const ingredientDBO = await collection.findOne({ _id: objectId });

    if (!ingredientDBO) {
        throw new NotFound("Aucun ingrédient trouvé pour cet ID");
    }

    return convertToIngredient(ingredientDBO);
}

export const updateIngredient = async (id: string, ingredient: Ingredient): Promise<boolean> => {
    const objectId = new ObjectId(id);
    const result = await collection.updateOne({ _id: objectId }, { $set: ingredient });

    if (result.modifiedCount === 0) {
        throw new NotFound("Aucun ingrédient trouvé pour cet ID");
    }

    return true;
}

export const deleteIngredient = async (id: string): Promise<boolean> => {
    const objectId = new ObjectId(id);
    const result = await collection.deleteOne({ _id: objectId });

    if (result.deletedCount === 0) {
        throw new NotFound("Aucun ingrédient trouvé pour cet ID");
    }

    return true;
}
