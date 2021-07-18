
let fs = require('fs');
let fileData = fs.readFileSync('./tareafinal.json', 'utf8') //instancio ubicacion del archivo.json
let llamadaDeMetodo = require('./funcionesDeTareas');//creo una instancia de la clase
let leerDatosPorConsola = process.argv.slice(2) //leo la variable que se ingresa


llamadaDeMetodo.lecturaDeDatos(leerDatosPorConsola, fileData) //ejecuto la accion
