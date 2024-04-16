### Démarrage

```txt
npm start > start in prod mode (port 80)
npm run dev AND npm run api > start in dev mode (port 3000)
```

**Remarque:** Sur les branches précédentes, j'ai commis une erreur par rapport à la convention de nommage du point d'entrée pour un projet Express. J'avai créé un dossier `bin/` dans lequel j'ai placé un fichier `www`. J'ai inversé les noms ! 🫢

### Utilisation

En mode dev (`npm run dev`):

**API**

```txt
GET http://localhost:3000/api/todos
GET http://localhost:3000/api/todos/{id}
POST http://localhost:3000/api/todos
DELETE http://localhost:3000/api/todos/{id}
PATCH http://localhost:3000/api/todos/{id}
```

Un fichier `requests.http` à la racine du projet permet de tester les requêtes via l'extension vscode [Rest Client API](https://marketplace.visualstudio.com/items?itemName=donebd.rest-client-api)

**Dépendances**

```txt
ejs ▶️ moteur de template
express ▶️ création du serveur
mongoose ▶️ ORM
npm-run-all ▶️ lancement de scripts npm
cross-env ▶️ résolution var env (windows) (utilisé en mode dev uniquement car le projet est destiné à tourner sur de l'unix)
nodemon ▶️ redémarre node au changement des fichiers (js par défaut) (en mode dev)
socket.io ▶️ pour recharger le navigateur au changement des fichiers ejs (en mode dev)
open ▶️ pour ouvrir le navigateur au démarrage du projet (en mode dev)
```
