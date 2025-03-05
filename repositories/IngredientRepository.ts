import { Ingredient } from "../models/Ingredient.ts";
import { ObjectId } from "npm:mongodb@5.6.0";
import { db } from "../config/database.ts";

const collection = db.collection("ingredients");

export class IngredientRepository {

    async createIngredient(ingredient: Ingredient): Promise<boolean> {
        const result = await collection.insertOne(ingredient);
        return result;
    }

    async getIngredients(): Promise<Ingredient[]> {
        const ingredients = await collection.find();
        return ingredients;
    }

    async getIngredientById(id: string): Promise<Ingredient> {
        const objectId = new ObjectId(id);
        const ingredient = await collection.findOne({ _id: objectId });
        return ingredient;
    }

    async updateIngredient(id: string, ingredient: Ingredient): Promise<boolean> {
        const objectId = new ObjectId(id);
        const result = await collection.updateOne({ _id: objectId }, { $set: ingredient });
        return result;
    }

    async deleteIngredient(id: string): Promise<boolean> {
        const objectId = new ObjectId(id);
        const result = await collection.deleteOne({ _id: objectId });
        return result;
    }
};
