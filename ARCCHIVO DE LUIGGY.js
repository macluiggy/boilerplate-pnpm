//ESTE ARCHIVO ES DE LUIGGY
//holadhhddd
////MAJOR.MINOR.PATCH SemVer, esto sirve para guiarse con las versiones de un proyecto, MAJOR indica que se hizo un cambio que en la que las nuevas funcionalidades solo seran comparible desde MAJOR, MINOR quiere decir que se añadieron funcionalidades que si son compatibles con verisiones aneriores, mientras que PATCH nos trata de decir que se arreglaron errores que son compatibles con versiones anteriores. En otras palabras los PATCHES son correciones de erroes de, los MINOR son nuevas funciones que no rompen compatibilidad con versiones anteriores y MAJOR añade cambios que si rompen con las versiones anteriores, o no son compatibles con ella.

let A = {
  "name": "fcc-learn-npm-package-json",
  "author": "Martin Lauf",
  "description": "A project for back end",
  "keywords": [
    "developer",
    "javascript",
    "freecodecamp"
  ],
  "license": "UNLICENSED",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.17.1",//el Caret-Character ('^') le permite a npm actualizar a la ultima 4.x.x verion de la dependencia, es decir que permite actualizar la ultima version MINOR
    "moment": "~2.10.2"//el Tilde-Character ('~') permite que se use la ultima version de PATCH, esto permite actulizar los errores (bugs) de la version actual
  },
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "engines": {
    "node": "8.11.2"
  },
  "repository": {
    "type": "git",
    "url": "https://idontknow/todo.git"
  }
}