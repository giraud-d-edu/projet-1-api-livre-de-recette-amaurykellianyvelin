import { Router } from "../deps.ts";
import * as ingredientController from "../controllers/IngredientController.ts"

const router = new Router();

router.post("/ingredients", ingredientController.createIngredient);
router.get("/ingredients", ingredientController.getIngredients);
router.get("/ingredients/:id", ingredientController.getIngredientById);

export default router;