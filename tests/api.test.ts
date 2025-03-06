let createdIngredientId: string;
const BASE_URL = "http://localhost:8000";

Deno.test("GET /ingredients doit retourner une liste d'ingrédients", async () => {
    const response = await fetch(`${BASE_URL}/ingredients`);
    if (response.status !== 200) {
        throw new Error(`Statut incorrect : ${response.status}`);
    }

    const jsonData = await response.json();
    if (!jsonData.ingredients || !Array.isArray(jsonData.ingredients)) {
        throw new Error("La réponse ne contient pas une liste d'ingrédients !");
    }

    console.log("✅ GET /ingredients réussi !");
});

Deno.test("POST /ingredients doit créer un ingrédient", async () => {
    const newIngredient = { name: "Poivre" };

    const response = await fetch(`${BASE_URL}/ingredients`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newIngredient),
    });

    if (response.status !== 201) {
        throw new Error(`Statut incorrect : ${response.status}`);
    }

    const json = await response.json();
    if (!json.ingredient._id || json.ingredient.name !== newIngredient.name) {
        throw new Error("La réponse ne contient pas l'ingrédient créé !");
    }

    // On garde en mémoire l'id de l'ingrédient créé pour les tests suivants
    createdIngredientId = json.ingredient._id;
    console.log(`✅ POST /ingredients réussi ! ID: ${createdIngredientId}`);
});

Deno.test("GET /ingredients/:id doit retourner un ingrédient", async () => {
    if (!createdIngredientId) {
        throw new Error("L'ID de l'ingrédient créé est introuvable !");
    }

    const getResponse = await fetch(`${BASE_URL}/ingredients/${createdIngredientId}`);
    if (getResponse.status !== 200) {
        throw new Error(`Statut incorrect : ${getResponse.status}`);
    }

    const json = await getResponse.json();
    if (json.ingredient._id !== createdIngredientId) {
        throw new Error("L'ingrédient retourné ne correspond pas !");
    }

    console.log("✅ GET /ingredients/:id réussi !");
});

Deno.test("PUT /ingredients/:id doit mettre à jour un ingrédient", async () => {
    if (!createdIngredientId) {
        throw new Error("L'ID de l'ingrédient créé est introuvable !");
    }
    const updated = { name: "Sel fin" };

    const putResponse = await fetch(`${BASE_URL}/ingredients/${createdIngredientId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
    });

    if (putResponse.status !== 200) {
        throw new Error(`Statut incorrect : ${putResponse.status}`);
    }

    const json = await putResponse.json();
    if (json.message !== "Ingrédient modifié avec succès.") {
        throw new Error("L'ingrédient n'a pas été mis à jour !");
    }

    console.log("✅ PUT /ingredients/:id réussi !");
});

Deno.test("DELETE /ingredients/:id doit supprimer un ingrédient", async () => {
    if (!createdIngredientId) {
        throw new Error("L'ID de l'ingrédient créé est introuvable !");
    }

    const deleteResponse = await fetch(`${BASE_URL}/ingredients/${createdIngredientId}`, {
        method: "DELETE",
    });

    if (deleteResponse.status !== 200) {
        throw new Error(`Statut incorrect : ${deleteResponse.status}`);
    }

    await deleteResponse.text(); 

    console.log("✅ DELETE /ingredients/:id réussi !");
});

