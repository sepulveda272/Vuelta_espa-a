import Premio from "../models/Premio.js";

const obtenerPremio = async (req,res)=>{
  const premio = await Premio.find();

  res.json(premio);
};

const agregarPremio = async (req,res)=>{
  const premio = new Premio(req.body);

  try {
    const nuevoPremio = await premio.save();
    res.json(nuevoPremio);
  } catch (error) {
    console.log(error);
  }
};

const borrarPremio = async (req,res)=>{
  try {
    await Premio.deleteOne({_id:req.params.id});
    res.status(204).send();
  } catch (error) {
    res.status(404);
    res.send({error: "el premio no existe"});
  }
};

const actualizarPremio = async (req, res) =>{
  try {
      const premio = await Premio.findOneAndUpdate({_id:req.params.id},req.body,{new:true});
      res.json(premio);
  } catch (error) {
      res.status(404)
      res.send({error: "el premio no existe"});
  }
};

export  {obtenerPremio,agregarPremio,borrarPremio,actualizarPremio};