export interface Recette {
    id: string;
    name: string;
    preparation_time: number;
    cooking_time: number;
    ingredients: { ingredient_id: string; quantity: string }[];
    instructions: string;
    createdDate: Date;
    updatedDate: Date;
}