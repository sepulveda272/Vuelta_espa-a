import Ciclista from "../models/Ciclistas.js";

const obtenerCiclistas = async (req,res)=>{
    const ciclistas = await Ciclista.find();

    res.json(ciclistas);
};

const agregarCiclistas = async (req,res)=>{
    const ciclista = new Ciclista(req.body);

    try {
        const nuevoCiclista = await ciclista.save();

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