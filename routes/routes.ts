import { Router } from "../deps.ts";
import * as ingredientController from "../controllers/IngredientController.ts"
import * as recetteController from "../controllers/RecetteController.ts"

const router = new Router();

router.post("/ingredients", ingredientController.createIngredient);
router.get("/ingredients", ingredientController.getIngredients);
router.get("/ingredients/:id", ingredientController.getIngredientById);
router.put("/ingredients/:id", ingredientController.updateIngredient);
router.delete("/ingredients/:id", ingredientController.deleteIngredient);
router.post("/recipes", recetteController.createRecette);
router.get("/recipes", recetteController.getRecettes);
router.get("/recipes/:id", recetteController.getRecetteById);
router.delete("/recipes/:id", recetteController.deleteRecette);
router.put("/recipes/:id", recetteController.updateRecette);

export default router;