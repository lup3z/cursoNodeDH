const fs = require('fs');


function leerDatos() {
    const fileData = fs.readFileSync('./tareas.json', 'utf8')
    const objeto = JSON.parse(fileData)
    return objeto
}

function escribir(){
    let currentArray = leerDatos()

    let jugador = {
        nombre: 'Leonel',
        numero: 4,
        isBestOfNeymar: true,
        nacionalidad: 'Colombia'
    }

    currentArray.push(jugador)
    fs.writeFileSync('./tareas.json', JSON.stringify(currentArray))
}

escribir()