// ** Realizar peticion con Axios */

const URI = 'https://pokeapi.co/api/v2/pokemon/charmander/';

// la librería axios que importamos en HTML, crea una variable axios

axios.get(URI)
    .then((response)=>{
        console.log(response.status); //Status de la peticion = 200
        console.log(response.data); //Info pokemon

        let html;

        if(response.status === 200)
        { // el weight y el height lo trajo de los datos de la consola
            html = `<h1> ${response.data.name} </h1>
                    <ul>
                    <li> ID : <strong>${response.data.id}</strong> </li>
                    <li> PESO : <strong>${response.data.weight}</strong> </li>
                    <li> ALTURA : <strong>${response.data.height}</strong> </li>
                    <ul>`;
        } else
        {
            html = `<h1> No se encontró la información del pokemon </h1>`;
        }

        let body = document.getElementById("body");
        body.innerHTML = html;

    }).catch((e)=>{
        console.log(e);
    })