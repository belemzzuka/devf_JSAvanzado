// Importar los metodos que realizamos en el archivo de crudAutores.js
const authorsCrud = require('./crudAutores');

//Mostrar autores
//authorsCrud.listarAutores();

// Mostrar autor por ID
//authorsCrud.mostrarInfoAutor(14553);

// Crear un autor
/* const jsonInfoAutor = {   //Esto aqui va a ser un objeto de JS y no en formato JSON porque forma parte de nuestro lenguaje JS. Internamente lo va a convertir en una trama de string
    name:'Belem',
    last_name:'Garrido',
    nacionalidad:'MX',
    biography:'Lego Skate',
    gender:'F',
    age:0,
    is_alive:true
}

authorsCrud.createAuthor(jsonInfoAutor); */

// Actualizar un autor
const jsonInfoAutor = {   //Esto aqui va a ser un objeto de JS y no en formato JSON porque forma parte de nuestro lenguaje JS. Internamente lo va a convertir en una trama de string
    name:'Belemm',
    last_name:'Garridoo',
    biography:'ACTUALIZANDO INFO',
    age:35
}

authorsCrud.actualizarInfoAutor(14557,jsonInfoAutor);