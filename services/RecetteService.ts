import {Recette} from "../models/Recette.ts";
import * as recetteRepository from "../repositories/RecetteRepository.ts"

export const createRecette = (recette: Recette) => {
    const recetteWithDate = {
        ...recette,
        createdAt: new Date(),
    };
    return recetteRepository.createRecette(recetteWithDate);
}

export const getRecettes = () => {
    return recetteRepository.getRecettes();
}

export const getRecetteById = (id: string) => {
    return recetteRepository.getRecetteById(id);
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