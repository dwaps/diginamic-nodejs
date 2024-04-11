### Démarrage

```txt
npm start > start in prod mode (port 80)
npm run dev AND npm run api > start in dev mode (port 3000)
```

### Utilisation

En mode dev (`npm run dev`):

```txt
GET http://localhost:3000/api/todos
GET http://localhost:3000/api/todos/{id}
POST http://localhost:3000/api/todos
DELETE http://localhost:3000/api/todos/{id}
PATCH http://localhost:3000/api/todos/{id}
```

Un fichier `requests.http` à la racine du projet permet de tester les requêtes via l'extension vscode [Rest Client API](https://marketplace.visualstudio.com/items?itemName=donebd.rest-client-api)
