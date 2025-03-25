import {Ingredient} from "./Ingredient.ts";

export interface Recette {
    id: string;
    name: string;
    preparation_time: number;
    cooking_time: number;
    ingredients: Ingredient[];
    instructions: string;
    createdDate: Date;
    updatedDate: Date;
}