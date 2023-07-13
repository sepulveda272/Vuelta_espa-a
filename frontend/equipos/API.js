const url = "http://localhost:5000/equipos/all";
const urlNuevo = "http://localhost:5000/equipos/add";
const urlBorrar = "http://localhost:5000/equipos/del";
const urlActualizar = "http://localhost:5000/equipos/upd";


export const obtenerEquipo = async () => {
    try {
        const equipos = await fetch(url);
        const datosEquipos = await equipos.json();
        return datosEquipos;
    } catch (error) {
        console.log(error,"no sirve");
    }
};


export const nuevoEquipo = async (equipos) => {
    try {
        await fetch(urlNuevo,{
            method: "POST",
            body:JSON.stringify(equipos),
            headers:{'Content-Type':'application/json'}
        });
        window.location.href ="index.html"
    } catch (error) {
        console.log(error,"no sirve");
    }
};


export const deleteEquipo = async (_id) => {
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




export const editarEquipo = async (datos) => {
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


