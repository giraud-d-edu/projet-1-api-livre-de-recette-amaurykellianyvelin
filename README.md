# Site de Recettes

Il s'agit d'une application web permettant de gérer des recettes culinaires. L'application offre un CRUD (Create, Read, Update, Delete) pour les recettes et les ingrédients associés, avec un backend en **Deno** et un frontend en **Svelte**.

## Description du projet

L'application permet aux utilisateurs de :

- **Créer**, **lire**, **mettre à jour** et **supprimer** des recettes.
- Ajouter, mettre à jour ou supprimer des **ingrédients** pour chaque recette.
- Consulter une liste de recettes avec leurs ingrédients.

Ce projet est composé de deux parties distinctes :

1. **Backend (API) :** Géré avec **Deno**, cette API fournit des endpoints pour interagir avec la base de données MongoDB, en permettant de gérer les recettes et les ingrédients.
2. **Frontend (Interface utilisateur) :** Développé avec **Svelte**, il permet à l'utilisateur d'interagir facilement avec l'API pour afficher et manipuler les recettes et les ingrédients.

### Fonctionnalités

- **CRUD Recettes :** Créer, lire, mettre à jour et supprimer des recettes.
- **CRUD Ingrédients :** Créer, lire, mettre à jour et supprimer des ingrédients pour chaque recette.
- **Interface utilisateur conviviale** pour la gestion des recettes et des ingrédients.
- **Base de données MongoDB** stockant les recettes et leurs ingrédients.

---

## Structure du projet

Le projet est divisé en deux répertoires principaux : **backend** et **frontend**.

### Backend

Le backend est un serveur API construit avec **Deno**. Il gère la logique métier et l'interaction avec la base de données MongoDB.

- **README Backend** : [Backend README](./back/README.md)
- **Technologies :** Deno, MongoDB et Docker

### Frontend

Le frontend est une application **Svelte** qui permet à l'utilisateur d'interagir avec l'API pour afficher et gérer les recettes et ingrédients.

- **README Frontend** : [Frontend README](./front/README.md)
- **Technologies :** Svelte, HTML, CSS, JavaScript

### Remarques

- Ce projet est conçu pour des fins pédagogiques et peut être modifié ou étendu pour répondre à des besoins spécifiques.
- La gestion des erreurs et la validation des données peuvent être améliorées dans de futures versions.
