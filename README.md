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
    "test": "echo \"Error: no test specified\" && exit 1",
    "build:dev": "webpack --config webpack.config.js",
    "production": "webpack --config webpack.prod.js",
    "start": "webpack serve --config webpack.config.js --open --port=8080"
```
