export interface Recette {
    id: string;
    name: string;
    preparation_time: number;
    cooking_time: number;
    ingredients: { ingredient_id: string; quantity: string }[]; // TODO : Utiliser Ingredient[]
    instructions: string;
    createdDate: Date;
    updatedDate: Date;
}