/** GOOD READS API */
// DOCUMENTACION: https://goodreads-devf-aaron.herokuapp.com/docs
// URL API: https://goodreads-devf-aaron.herokuapp.com/api/v1/

const request = require('request'); //instanciar la libreria. Esto tambien es modulos.

const URI = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';

//empezar a trabajar con CRUD
// Obtener lista autores

const listarAutores = () =>{
    request.get(URI, function (err,response,body){
        if(response.statusCode === 200)
        {
            const authors = JSON.parse(body); //si el statusCode es 200, osea exitoso, parsea el resultado a JSON
            console.log(authors); //imprimir la lista de autores parseada en formato JSON
        }
    })
}


// Obtener autor por ID
// la documentacion dice {id} porque es un parametro pero no significa que tengamos que ponerlo entre {}
const mostrarInfoAutor = (id) =>{
    request.get(URI + id, function (err,response,body){
        if(response.statusCode === 200)
        {
            const author = JSON.parse(body);
            console.log(author);
        }
    })
}


// Crear autores
const createAuthor = (jsonData) =>{
    const objConfig = {
        url:URI, //la URI
        form:jsonData //decirle que vamos a enviarle datos en formato JSON
    }

    request.post(objConfig, function(err,response,body){
        if (response.statusCode === 201)  //si regresa un 201 significa que autor fue creado
        {
            const author = JSON.parse(body);
            console.log(author);
        } else
        {
            console.log(response);
        }
    })
}

// Actualizar info de autor
const actualizarInfoAutor = (id,jsonInfoAutor) =>{
    const objConfig = {
        url:URI + id + '/', //la URI + el ID que necesita como parametro pero va a venir en el objeto. Otra manera podria ser como parametro de la funcion
        form:jsonInfoAutor //decirle que vamos a enviarle datos en formato JSON
    }

    request.patch(objConfig, function(err,response,body){
        if(response.statusCode === 200)
        {
            const author = JSON.parse(body);
            console.log(author);
        } else
        {
            console.log(response);
        }
    })
}

// Exportar modulos commonJS
module.exports = {  // sintaxis de commonJS
    listarAutores,  //Exportar la funcion listarAutores para usarla en otros archivos js
    mostrarInfoAutor,
    createAuthor,
    actualizarInfoAutor
}