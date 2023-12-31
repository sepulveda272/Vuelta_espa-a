const url = "http://localhost:5000/ciclistas/all";
const urlNuevo = "http://localhost:5000/ciclistas/add";
const urlBorrar = "http://localhost:5000/ciclistas/del";
const urlActualizar = "http://localhost:5000/ciclistas/upd";


export const obtenerCiclistas = async () => {
    try {
        const ciclistas = await fetch(url);
        const datosCiclistas = await ciclistas.json();
        return datosCiclistas;
    } catch (error) {
        console.log(error,"no sirve");
    }
};


export const nuevoCiclista = async (ciclistas) => {
    try {
        await fetch(urlNuevo,{
            method: "POST",
            body:JSON.stringify(ciclistas),
            headers:{'Content-Type':'application/json'}
        });
        window.location.href ="index.html"
    } catch (error) {
        console.log(error,"no sirve");
    }
};


export const deleteCiclista = async (_id) => {
  try {
        await fetch(`${urlBorrar}/${_id}`,{
            method:'DELETE'
        })
        window.location.href ="index.html"
    } catch (error) {
        console.log(error);
    }
};


/* export const obtenerCategory = async (id) => {
    try {
        await fetch(`${url}/${id}`,{
            method:'POST'
        })
    } catch (error) {
        console.log(error);
    }
}; */




export const editarCiclista = async (datos) => {
    try {
        await fetch(`${urlActualizar}/${datos._id}`, {
            method: "PATCH",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(datos)
        }).then(response => response.json()).then(updatedDatos => {
            console.log('Datos actualizados:', updatedDatos);
        });
        window.location.href ="index.html"
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
    }
};


