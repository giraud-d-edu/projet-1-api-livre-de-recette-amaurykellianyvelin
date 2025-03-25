import { Application } from "./deps.ts";
import router from "./src/routes/routes.ts";
import { errorHandler } from "./src/middlewares/ErrorHandler.ts";

const app = new Application();

app.use(errorHandler);

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Serveur démarré sur http://localhost:8000");
await app.listen({ port: 8000 });