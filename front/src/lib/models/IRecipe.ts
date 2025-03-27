import type {IngredientDetail} from "$lib/models/IIgredientDetail";

export interface Recette {
    id: string;
    name: string;
    preparation_time: number;
    cooking_time: number;
    ingredients: IngredientDetail[];
    instructions: string;
    createdDate: Date;
    updatedDate: Date;
}