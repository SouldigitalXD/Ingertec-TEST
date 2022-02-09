# Ingertec Starter

Este es el proyecto de ingreso para INGERTEC usando webpack Node Javascript Express Mysql entre otros.

### Notas:
Recuerda reconstruir los modulos de Node 
```
npm install
```

y para iniciar el server, recuerda:
```
npm start 
```

Despues podes usar el link local o el de heroku 
```
http://localhost:3000/  o  https://ingertec-test.herokuapp.com/
```

Para mas informacion no dudes en consultar el archivo package.json en donde estaran los siguientes comandos:
```
    "dev": "cross-env NODE_ENV=development nodemon backend/index.js --ignore frontend",
    "start": "cross-env NODE_ENV=production node backend/index.js",
    "build:dev": "webpack --config webpack.config.js",
    "production": "webpack --config webpack.prod.js",
    "serve": "webpack serve --config webpack.config.js --open --port=8080"
```
