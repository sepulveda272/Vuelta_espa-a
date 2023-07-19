import Etapa from "../models/Etapa.js";

const obtenerEtapa = async (req,res)=>{
    const etapas = await   Etapa.find();

    res.json(etapas);
};

const agregarEtapa = async (req,res)=>{
    const etapa = new Etapa(req.body);

    try {
        const nuevaEtapa = await etapa.save();
        res.json(nuevaEtapa);
    } catch (error) {
        console.log(error);
    }
}

const borrarEtapa = async (req,res)=>{
    try {
        await Etapa.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404)
        res.send({error: "La etapa no existe"});
    }
}

const actualizarEtapa = async (req, res) =>{
    try {
        const etapa = await Etapa.findOne({_id:req.params.id});

        if(req.body.nombre){
            etapa.nombre = req.body.nombre;
        }
        if(req.body.fecha){
            etapa.fecha = req.body.fecha;
        }
        if(req.body.terreno){
            etapa.terreno = req.body.terreno;
        }
        if(req.body.salida){
            etapa.salida = req.body.salida;
        }
        if(req.body.llegada){
            etapa.llegada = req.body.llegada;
        }
        await etapa.save()
        res.send(etapa);
    } catch (error) {
        res.status(404)
        res.send({error: "La etapa no existe"});
    }
}

export{obtenerEtapa,agregarEtapa,borrarEtapa,actualizarEtapa};