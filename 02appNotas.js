const fs = require('fs');

let opciones=process.argv.slice(2)
let operacion=opciones[0]

switch (operacion) {
    case undefined:
        console.log('debe mandar una opcion')
        break
    case 'escribir':
        Escribir(opciones[1],opciones[2])
        break;
    case 'listar':
        console.log(leerDatos())
        break;
    default:
        console.log('no te entiendo')
        break;
}


function leerDatos() {
    const fileData = fs.readFileSync('./tareas2.json', 'utf8')
    return JSON.parse(fileData)

}


function Escribir(titulo,estado) {
    let currentArray=leerDatos()
    let tarea={
        titulo:titulo,
        estado:estado
    }

    currentArray.push(tarea)

    fs.writeFileSync('./tareas2.json',JSON.stringify(currentArray))
    console.log('Escribir finalizado.')
}