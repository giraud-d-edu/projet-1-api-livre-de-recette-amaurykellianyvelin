import { Recette } from "../models/Recette.ts";
import { db } from "../config/database.ts";
import { ObjectId } from "npm:mongodb@5.6.0";
import NotFound from "../errors/NotFound.ts";
import { convertToRecette } from "./dbos/RecetteDBO.ts";

const collection = db.collection("recettes");

export const createRecette = async (recette: Recette): Promise<Recette> => {
    const result = await collection.insertOne(recette);

    if (result.acknowledged && result.insertedId) {
        return getRecetteById(result.insertedId.toString());
    }

    throw new Error("Erreur lors de la création de l'ingrédient.")
}

export const getRecettes = async (): Promise<Recette[]> => {
    const recetteDBO = await collection.find({}).toArray();
    return recetteDBO.map(convertToRecette);
}

export const getRecetteById = async (id: string): Promise<Recette> => {
    const objectId = new ObjectId(id);
    const recetteDBO = await collection.findOne({ _id: objectId });

    if (!recetteDBO) {
        throw new NotFound("Aucune recette trouvé pour cet ID");
    }

    return convertToRecette(recetteDBO);
}

export const deleteRecette = async (id: string): Promise<boolean> => {
    const objectId = new ObjectId(id);
    return await collection.deleteOne({ _id: objectId });
}

export const updateRecette = async (id: string, recette: Recette): Promise<boolean> => {
    const objectId = new ObjectId(id);
    const result = await collection.updateOne({ _id: objectId }, { $set: recette });

    if (result.modifiedCount === 0) {
        throw new NotFound("Aucune recette trouvé pour cet ID");
    }

    return true;
}

