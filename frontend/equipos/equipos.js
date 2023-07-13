import { obtenerEquipo,nuevoEquipo,deleteEquipo,editarEquipo } from "./API.js";


document.addEventListener("DOMContentLoaded", () => {
    mostrarLista()

});


/* LISTAR CATEGORIAS  - CRUD (R) */

async function mostrarLista() {
    const equipos = await obtenerEquipo();
    const contenedor = document.querySelector("main");
    equipos.forEach((equipo) => {
        const {nombre,pais,director,año,_id} = equipo
        contenedor.innerHTML+=`
        
        <div class="card">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
            <div class="card__content">
                <p class="card__title">Equipo: ${nombre}
                </p><p class="card__description">El pais: ${pais}<br>El director: ${director}</p>
                <p class="card__description">Año: ${año}</p>
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

const formulario = document.querySelector("#formEquipo")
formulario.addEventListener('submit', validarEquipo)

function validarEquipo(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const pais = document.querySelector("#pais").value;
    const director = document.querySelector("#director").value;
    const año = document.querySelector("#año").value;

    const equipo = {
        nombre,
        pais,
        director,
        año
    }
    if(validate(equipo)){
        alert ('todos los campos son obligatirios')
        return 
        
    }

    nuevoEquipo (equipo)

}





/* ELIMINAR CATEGORIA  - CRUD (D) */

const eliminar = document.querySelector("main");
eliminar.addEventListener("click",borrar);

function borrar(e){
    if (e.target.classList.contains("eliminar")) {
        console.log(e.target);
        const idEquipos = e.target.getAttribute("id");
        const confir = confirm("Desea eliminar a este equipo?");
        if (confir) {
            deleteEquipo(idEquipos);
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

        const datosNuw = document.querySelector('#formEditEquipo')
        datosNuw.addEventListener('submit',uppdateEquipo)
    
    function uppdateEquipo(e){
        e.preventDefault();
        
        const nombre = document.querySelector("#nombreEdit").value;
        const pais = document.querySelector("#paisEdit").value;
        const director = document.querySelector("#directorEdit").value;
        const año = document.querySelector("#añoEdit").value;
        
    
        const datos={
            _id:idActualizar,
            nombre,
            pais,
            director,
            año
        }
        console.log(datos);
    
        editarEquipo(datos)
    }  

    }

    }

 function validate(objeto){
    return !Object.values(objeto).every( element => element !=='');

} 