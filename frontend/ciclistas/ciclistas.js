import { obtenerCiclistas,nuevoCiclista,deleteCiclista, editarCiclista } from "./API.js";


document.addEventListener("DOMContentLoaded", () => {
    mostrarLista()

});


/* LISTAR CATEGORIAS  - CRUD (R) */

async function mostrarLista() {
    const ciclistas = await obtenerCiclistas();
    const contenedor = document.querySelector("main");
    ciclistas.forEach((ciclista) => {
        const {nombre,edad,nacionalidad,equipo,estadistica,descripcion,_id} = ciclista
        contenedor.innerHTML+=`
        
        <div class="card">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
            <div class="card__content">
                <p class="card__title">${nombre}
                </p><p class="card__description">${edad}<br>${nacionalidad}</p>
                <p class="card__description">${equipo}<br>${estadistica}</p>
                <p class="card__description">${descripcion}</p>
                <div class="botones_orden">
                <button class="edit-button update" idActualizar="${_id}" data-bs-toggle="modal" data-bs-target="#modalUpdate">
                <i class="bi bi-pencil"></i>
                </button>
                <button class="delete-button eliminar" id="${_id}">
                <i class="bi bi-trash"></i>
                </button>
                </div>
        </div>
        `
    });
};
/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */

const formulario = document.querySelector("#formCiclista")
formulario.addEventListener('submit', validarCiclista)

function validarCiclista(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const edad = document.querySelector("#edad").value;
    const nacionalidad = document.querySelector("#nacionalidad").value;
    const equipo = document.querySelector("#equipo").value;
    const estadistica = document.querySelector("#estadistica").value;
    const descripcion = document.querySelector("#descripcion").value;

    const ciclista = {
        nombre,
        edad,
        nacionalidad,
        equipo,
        estadistica,
        descripcion
    }
    if(validate(ciclista)){
        alert ('todos los campos son obligatirios')
        return 
        
    }

    nuevoCiclista (ciclista)

}





/* ELIMINAR CATEGORIA  - CRUD (D) */

const eliminar = document.querySelector("main");
eliminar.addEventListener("click",borrar);

function borrar(e){
    if (e.target.classList.contains("eliminar")) {
        console.log(e.target);
        const idCiclistas = e.target.getAttribute("id");
        const confir = confirm("Desea eliminar a este ciclista?");
        if (confir) {
            deleteCiclista(idCiclistas);
        }
    }
}





//EDITAR CATEGORIA - CRUD (U)const 
const nuevosDatos = document.querySelector('main')
nuevosDatos.addEventListener('click',actualizar)


function actualizar(e){
    e.preventDefault();
  
    if(e.target.classList.contains('update')){
        
        const idActualizar= e.target.getAttribute('idActualizar')
        console.log(idActualizar);

        const datosNuw = document.querySelector('#formEditCiclista')
        datosNuw.addEventListener('submit',uppdateCiclista)
    
    function uppdateCiclista(e){
        e.preventDefault();
        
        const nombre = document.querySelector("#nombreEdit").value;
        const edad = document.querySelector("#edadEdit").value;
        const nacionalidad = document.querySelector("#nacionalidadEdit").value;
        const equipo = document.querySelector("#equipoEdit").value;
        const estadistica = document.querySelector("#estadisticasEdit").value;
        const descripcion = document.querySelector("#descripcionEdit").value;
        
    
        const datos={
            _id:idActualizar,
            nombre,
            edad,
            nacionalidad,
            equipo,
            estadistica,
            descripcion
        }
        console.log(datos);
    
        editarCiclista(datos)
    }  

    }

    }

 function validate(objeto){
    return !Object.values(objeto).every( element => element !=='');

} 