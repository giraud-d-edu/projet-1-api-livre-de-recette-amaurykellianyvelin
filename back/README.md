# 🚀 API CRUD de Recettes et Ingrédients avec Deno

## 🌟 Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants :

- [Deno](https://deno.land/)
- [Docker](https://www.docker.com/) via Docker Compose
- [MongoDB](https://www.mongodb.com/) via Mongo Atlas

---

# Lancement de l'application en local

1. ### Créer un fichier **_.env_** dans le dossier root

Renseignez le MONGODB_URI en fonction de l'environnement choisi pour la base de données, Docker ou Mongo Atlas

  ```
    MONGODB_URI=mongodb://admin:admin@localhost:27017
    DB_NAME=R7
  ```

2. ### Build la base mongo docker

``` bash
    docker compose up -d
```

3. ### Lancer l'app avec deno

``` bash
    deno run --allow-all main.ts
```

--- 

# Bonus

1. ### Lancement des tests

``` bash
    deno test --allow-all
```

2. ### Que faire si on demande la recette du café ?
[cliquez-ici](https://exciting-zebra-22-x3bgj9bzby7q.deno.dev/recipes/coffee)


## 🌍 API Déployée

L'API est accessible à l'URL suivante :  
🔗 **[https://exciting-zebra-22-x3bgj9bzby7q.deno.dev/](https://exciting-zebra-22-x3bgj9bzby7q.deno.dev/)**