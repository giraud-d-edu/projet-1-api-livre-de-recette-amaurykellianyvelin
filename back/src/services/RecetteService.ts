import { Recette } from "../models/Recette.ts";
import * as recetteRepository from "../repositories/RecetteRepository.ts"
import { convertToRecetteDto } from "../controllers/dtos/RecetteDTO.ts"

export const createRecette = (recette: Recette) => {
    const recetteWithDate = {
        ...recette,
        createdDate: new Date(),
    };
    return recetteRepository.createRecette(recetteWithDate)
        .then((ingredient) => {
            return convertToRecetteDto(ingredient);
        });
}

export const getRecettes = () => {
    return recetteRepository.getRecettes()
        .then((ingredients) => {
            return ingredients.map((ingredient) => convertToRecetteDto(ingredient));
        });
}

export const getRecetteById = (id: string) => {
    return recetteRepository.getRecetteById(id)
        .then((ingredient) => {
            return convertToRecetteDto(ingredient);
        });
}

export const deleteRecette = (id: string) => {
    return recetteRepository.deleteRecette(id);
}

export const updateRecette = (id: string, recette: Recette) => {
    const recetteWithDate = {
        ...recette,
        updatedDate: new Date(),
    };
    return recetteRepository.updateRecette(id, recetteWithDate);
}