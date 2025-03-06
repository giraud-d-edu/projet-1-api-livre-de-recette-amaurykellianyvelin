import {Recette} from "../models/Recette.ts";
import {db} from "../config/database.ts";
import { ObjectId } from "npm:mongodb@5.6.0";
import {Ingredient} from "../models/Ingredient.ts";

const collection = db.collection("recettes");

export const createRecette = async (recette: Recette): Promise<Recette> => {
    const result = await collection.insertOne(recette);

    if (result.acknowledged && result.insertedId) {
        return getRecetteById(result.insertedId.toString());
    }

    throw new Error("Erreur lors de la création de l'ingrédient.")
}

export const getRecettes = async (): Promise<Recette[]> => {
    return await collection.find({}).toArray();
}

export const getRecetteById = async (id: string): Promise<Recette> => {
    const objectId = new ObjectId(id);
    return await collection.findOne({ _id: objectId });
}

export const deleteRecette = async (id: string): Promise<boolean> => {
    const objectId = new ObjectId(id);
    return await collection.deleteOne({ _id: objectId });
}

export const updateRecette = async (id: string, recette: Recette): Promise<boolean> => {
    const objectId = new ObjectId(id);
    return await collection.updateOne({ _id: objectId }, { $set: recette });
}

