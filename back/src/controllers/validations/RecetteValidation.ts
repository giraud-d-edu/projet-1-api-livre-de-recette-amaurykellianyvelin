import { RecetteDTO } from "../dtos/RecetteDTO.ts";

const MAX_NAME_LENGTH = 50;  // Limite des caractères pour le nom
const MAX_INSTRUCTION_LENGTH = 500;  // Limite de caractères pour les instructions

export const validateRecetteDTO = (body: any): string | null => {

    // Vérifie si 'name' est défini
    if (!body || typeof body.name !== "string" || body.name.trim().length === 0) {
        return "'name' est requis et doit être une chaîne non vide.";
    }

    // longueur du nom
    if (body.name.length > MAX_NAME_LENGTH) {
        return `'name' ne peut pas dépasser ${MAX_NAME_LENGTH} caractères.`;
    }

    if (typeof body.preparation_time !== "number" || body.preparation_time <= 0) {
        return "'preparation_time' doit être un nombre positif.";
    }

    if (typeof body.cooking_time !== "number" || body.cooking_time <= 0) {
        return "'cooking_time' doit être un nombre positif.";
    }

    if (!Array.isArray(body.ingredients)) {
        return "'ingredients' doit être un tableau.";
    }

    for (const ingredient of body.ingredients) {
        if (!ingredient.ingredient_id || typeof ingredient.ingredient_id !== "string") {
            return "'ingredient_id' dans 'ingredients' doit être une chaîne non vide.";
        }
        if (!ingredient.quantity || typeof ingredient.quantity !== "string") {
            return "'quantity' dans 'ingredients' doit être une chaîne non vide.";
        }
    }

    if (typeof body.instructions !== "string" || body.instructions.trim().length === 0) {
        return "'instructions' est requis et doit être une chaîne non vide.";
    }

    if (body.instructions.length > MAX_INSTRUCTION_LENGTH) {
        return `'instructions' ne peut pas dépasser ${MAX_INSTRUCTION_LENGTH} caractères.`;
    }

    // pas de champs supplémentaires dans le body
    const allowedFields = ["name", "preparation_time", "cooking_time", "ingredients", "instructions"];
    const extraFields = Object.keys(body).filter((key) => !allowedFields.includes(key));
    if (extraFields.length > 0) {
        return `Les champs suivants ne sont pas autorisés : ${extraFields.join(", ")}`;
    }

    return null; // Si aucune erreur n'est trouvée
};
