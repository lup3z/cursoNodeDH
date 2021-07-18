

function lecturaDeDatos(opcionIngresada, jsonQueVoyALeer){
    switch(opcionIngresada.length){
        case 1:
            if(opcionIngresada == 'listar'){
                let listado = JSON.parse(jsonQueVoyALeer) //cambio formato json a objeto literal
                listado.forEach(function(item){
                    console.log(item.titulo)
                });
            }else{
                console.log('No entiendo qué quieres hacer.')
            }
            break;
        case 0:
            console.log('Atención - Tienes que pasar una acción')    
            break;
        default:
           console.log('No entiendo qué quieres hacer.')
           break;
    }

}

module.exports = {lecturaDeDatos}