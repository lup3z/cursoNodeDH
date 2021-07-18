const fs = require('fs');
let opciones = process.argv.slice(2)

if (opciones.length > 0) {
    if (opciones.includes('listar')) {
        leerDatos()
    } else {
        console.log('No entiendo que quieres hacer');
    }
} else {
    console.log('Atencion : Tienes que pasar una accion');
}


function leerDatos() {
  
    const fileData = fs.readFileSync('./tareas.json', 'utf8')
    const objeto = JSON.parse(fileData)


    //lo que hice yo
    objeto.forEach(function(item){
        console.log(item.titulo)
    })

    //ejercicio original
    //for (let index = 0; index < objeto.length; index++) {
    //    console.log(objeto[index].titulo);
    //}

/*
    //companera
    function leerDatos() {
    const fileData = fs.readFileSync('./tareas.json', 'utf8')
    const objeto = JSON.parse(fileData)
    objeto.forEach((element) => {
        console.log(element.titulo)
    })
}
*/


}
