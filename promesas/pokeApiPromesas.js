// POKEAPI
// https://pokeapi.co/
// ENDPOINTS
// https://pokeapi.co/api/v2/pokemon/

// Paso 1: Instanciar request para hacer peticiones
const request = require('request');

// Paso 2: Declarar la URI
const URI = 'https://pokeapi.co/api/v2/pokemon/';

// Declarar Promesa
function obtenerPokemonPorNombre(nombre) {
    return new Promise((resolve,reject)=>{
        request.get(URI+nombre, function(err,response,body){
            if(response.statusCode === 200)
            {
                const bodyJSON = JSON.parse(body);
                // AQUÍ LA PROMESA SE CUMPLE
                resolve(bodyJSON); // Resolve: Devuelve la información correcta mediante la promesa
            } else 
            {
                // LA PROMESA NO SE PUDO CUMPLIR, REGRESA REJECT
                reject("NO SE PUDO OBTENER LA INFO DEL POKEMON");
            }
        });
    })
}


function obtenerInfoPokemon(nombre){
    console.log("Se busca la informacion del pokemon", nombre); // 1 en ejecutar
    
    //Manda a llamar la promesa
    obtenerPokemonPorNombre(nombre) // Mandar llamar a la promesa
    .then((infoPokemon) =>{
        console.log("La promesa fue correcta"); // 3ero en ejecutar
        //console.log(infoPokemon); //4to en ejecutar. Imprime lo de la function arrow, que realmente trae lo de bodyJSON
    })
    .catch((err) =>{
        console.log("La promesa devolvión un error");
        console.log(err);
    })
    //Aqui termina el llamado a la promesa
    console.log("Finalizando informacion del pokemon", nombre); // 2do en ejecutar
}

obtenerInfoPokemon("charmander"); // Primero en ejecutar
obtenerInfoPokemon("pikachu"); // Segundo en ejecutar
obtenerInfoPokemon("belem"); // Tercero en ejecutar

/* OUTPUT:
Se busca la informacion del pokemon charmander
Finalizando informacion del pokemon charmander
Se busca la informacion del pokemon pikachu
Finalizando informacion del pokemon pikachu
Se busca la informacion del pokemon belem
Finalizando informacion del pokemon belem
La promesa fue correcta
La promesa fue correcta
La promesa devolvión un error
NO SE PUDO OBTENER LA INFO DEL POKEMON */