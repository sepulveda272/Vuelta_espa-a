import Ciclista from "../models/Ciclistas.js";

const obtenerCiclistas = async (req,res)=>{
    const ciclistas = await Ciclista.find();

    res.json(ciclistas);
};

const agregarCiclistas = async (req,res)=>{
    

    try {
        const {nombre,edad,nacionalidad,equipo,estadistica,descripcion} = req.body;
        const ciclist = new Ciclista({nombre,edad,nacionalidad,equipo,estadistica,descripcion});

        const nuevoCiclista = await ciclist.save();

        res.json(nuevoCiclista);
    } catch (error) {
        console.log(error);
    }
}

const borrarCiclistas = async (req,res)=>{
    try {
        await Ciclista.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404)
        res.send({error: "El ciclista no existe"});
    }
}

const actualizarCiclistas = async (req, res) =>{
    try {
        const ciclista = await Ciclista.findOne({_id:req.params.id});

        if(req.body.nombre){
            ciclista.nombre = req.body.nombre;
        }
        if(req.body.edad){
            ciclista.edad = req.body.edad;
        }
        if(req.body.nacionalidad){
            ciclista.nacionalidad = req.body.nacionalidad;
        }
        if(req.body.equipo){
            ciclista.equipo = req.body.equipo;
        }
        if(req.body.estadistica){
            ciclista.estadistica = req.body.estadistica;
        }
        if(req.body.descripcion){
            ciclista.descripcion = req.body.descripcion;
        }
        await ciclista.save()
        res.send(ciclista);
    } catch (error) {
        res.status(404)
        res.send({error: "El ciclista no existe"});
    }
}

export{
    obtenerCiclistas,
    agregarCiclistas,
    borrarCiclistas,
    actualizarCiclistas
};