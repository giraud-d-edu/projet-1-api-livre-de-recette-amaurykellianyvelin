import { IngredientDTO } from "../dtos/IngredientDTO.ts";

const MAX_NAME_LENGTH = 50;

export const validateIngredientDTO = (body: any): string | null => {

    // Vérifie si 'name' est défini
    if (!body || typeof body.name !== "string" || body.name.trim().length === 0) {
        return "'name' est requis et doit être une chaîne non vide.";
    }

    // longueur du nom
    if (body.name.length > MAX_NAME_LENGTH) {
        return `L'attribut 'name' ne peut pas dépasser ${MAX_NAME_LENGTH} caractères.`;
    }

    // pas de champs supplémentaires dans le body
    const allowedFields = ["name"];
    const extraFields = Object.keys(body).filter((key) => !allowedFields.includes(key));
    if (extraFields.length > 0) {
        return `Les champs suivants ne sont pas autorisés : ${extraFields.join(", ")}`;
    }

    return null; // Si aucune erreur n'est trouvée
};
