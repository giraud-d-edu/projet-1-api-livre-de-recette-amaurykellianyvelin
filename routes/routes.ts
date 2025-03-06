import { Router } from "../deps.ts";
import * as ingredientController from "../controllers/IngredientController.ts"

const router = new Router();

router.post("/ingredients", ingredientController.createIngredient);
router.get("/ingredients", ingredientController.getIngredients);

export default router;