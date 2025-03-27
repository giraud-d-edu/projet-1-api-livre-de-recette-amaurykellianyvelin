# 📜 Documentation de l'Architecture

## 1. Structure du projet

```
/ src
  ├── lib
  │   ├── components  # Composants réutilisables
  │   ├── models      # Stores Svelte
  │   ├── services    # API et logique métier
  │   ├── stores      # Interfaces TypeScript
  ├── routes          # Pages du projet
  ├── app.css         # Styles globaux
  ├── app.html        # Fichier racine
/docs
  ├── architecture.md  # Documentation de l'architecture
```

---

## 2. Conventions de nommage

### Fichiers et Dossiers

- **Dossiers** : en kebab-case (ex. `lib/services`)
- **Composants** : en PascalCase (ex. `Button.svelte`)
- **Stores et services** : en camelCase (ex. `produitStore.ts`, `apiService.ts`)
- **Interfaces TypeScript** : préfixées par `I` (ex. `IProduit`)

### Variables et Fonctions

- **Constantes globales** : en SCREAMING\_SNAKE\_CASE (ex. `API_BASE_URL`)
- **Variables et fonctions** : en camelCase (ex. `loadRecettesById()`, `createdDate`)

---

##  3. Composants réutilisables

📍 Situés dans lib/components

| Nom             | Description         |
| --------------- | ------------------- |
| `Card.svelte`   | Carte d'affichage   |
| `Modal.svelte`  | Fenêtre modale      |

---

## 4. Interfaces TypeScript

📍 Situées dans lib/models

```ts
// IIngredient.ts
export interface Ingredient {
    id: string;
    name: string;
    category: string;
    createdDate: Date;
    updatedDate: Date;
}
```

```ts
// IRecette.ts
export interface Recette {
    id: string;
    name: string;
    preparation_time: number;
    cooking_time: number;
    ingredients: IngredientDetail[];
    instructions: string;
    createdDate: Date;
    updatedDate: Date;
}
```

```ts
// IIngredientDetail.ts
export interface IngredientDetail {
    id: string;
    name: string;
    quantity: string;
}
```
