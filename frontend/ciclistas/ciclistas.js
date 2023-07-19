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
        
        <div class="myCard">
            <div class="innerCard">
                <div class="frontSide">
                    <p class="title">CICLISTA 🚴</p>
                    <p>${nombre}</p>
                </div>
                <div class="backSide">
                    <p class="title">INFORMACION 📋</p>
                    <p>
                    Edad: ${edad} <br>
                    Nacionalidad: ${nacionalidad} <br> 
                    Equipo: ${equipo} <br>
                    Estadisticas: ${estadistica} <br>
                    descripcion: ${descripcion} 
                    </p>
                    <div class="botones_orden">
                    <button class="edit-button update" idActualizar="${_id}" data-bs-toggle="modal" data-bs-target="#modalUpdate">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="delete-button eliminar" id="${_id}">
                        <i class="bi bi-trash"></i>
                    </button>
                    </div>
                </div>
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