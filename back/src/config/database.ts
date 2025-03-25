import { MongoClient } from "../../deps.ts";
import "jsr:@std/dotenv/load";

const MONGODB_URI = Deno.env.get("MONGODB_URI");
const DB_NAME = Deno.env.get("DB_NAME");

if (!MONGODB_URI) {
    console.error("❌ MONGODB_URI is not set");
    Deno.exit(1);
}

let db: any;

try {
    console.log("⏳ Connexion à MongoDB...");
    const client = new MongoClient(MONGODB_URI);
    await client.connect();
    db = client.db(DB_NAME);
    console.log("✅ Connecté à MongoDB");
} catch (error) {
    console.error("❌ Erreur de connexion MongoDB:", error);
    Deno.exit(1);
}

export { db };