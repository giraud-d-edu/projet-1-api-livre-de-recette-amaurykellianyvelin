import { Application } from "./deps.ts";
import router from "./routes/routes.ts";
import { errorHandler } from "./middlewares/ErrorHandler.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

const app = new Application();

app.use(errorHandler);

app.use(oakCors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
}));

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Serveur démarré sur http://localhost:8000");
await app.listen({ port: 8000 });
