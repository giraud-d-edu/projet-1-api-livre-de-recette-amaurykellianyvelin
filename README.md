[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/5DxnKIye)


---
# Prérequis

- Deno
- Docker

Suite à des soucis d'accès à l'api Mongo nous avons passer la base en local avec docker

---
# Lancement de l'application

1. ### Créer un fichier **_.env_** dans le dossier root
  ```
    MONGODB_URI=mongodb://admin:admin@localhost:27017
    DB_NAME=R7
  ```
2. ### Build la base mongo docker
``` bash
docker compose up -d
```

3. ## Lancer l'app avec deno 
``` bash
deno run --allow-all main.ts
```
 
--- 
# Bonus
## Lancement des tests

``` bash
deno test --allow-all
```

### [Que faire si on demande la recette du café ?](localhost:8000/recipes/coffe)


# Feedbacks

## Tests avec Deno KO

TODO résoudre => `FAILED | 0 passed | 5 failed (7ms)`

## Test avec Postamn KO

TODO : Au post il faut recupérer l'id de la ressource créer pour ensuite l'utiliser lors des PUT et DELETE (les id sont générer par mongo et unique, on ne peux pas en récupérer un ancien)

## Structure

TODO : should have : Essayer de faire une arboresscence moins plate car c'est difficile de s'y retrouver (utiliser un dossier src)