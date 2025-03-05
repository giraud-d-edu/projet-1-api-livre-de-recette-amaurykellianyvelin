import { Ingredient } from "../models/Ingredient.ts";
import { ObjectId } from "npm:mongodb@5.6.0";
import { db } from "../config/database.ts";

const collection = db.collection("ingredients");

export const createIngredient = async (ingredient: Ingredient): Promise<Ingredient> => {
    const result = await collection.insertOne(ingredient);

    if (result.acknowledged && result.insertedId) {
        return getIngredientById(result.insertedId.toString());
    }

    throw new Error("Erreur lors de la création de l'ingrédient.")
}

export const getIngredients = async (): Promise<Ingredient[]> => {
    return await collection.find({}).toArray();
}

export const getIngredientById = async (id: string): Promise<Ingredient> => {
    const objectId = new ObjectId(id);
    return await collection.findOne({ _id: objectId });
}

export const updateIngredient = async (id: string, ingredient: Ingredient): Promise<boolean> => {
    const objectId = new ObjectId(id);
    return await collection.updateOne({ _id: objectId }, { $set: ingredient });
}

export const deleteIngredient = async (id: string): Promise<boolean> => {
    const objectId = new ObjectId(id);
    return await collection.deleteOne({ _id: objectId });
}
