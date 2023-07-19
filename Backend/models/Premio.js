import mongoose from "mongoose";

const premioSchema = mongoose.Schema({
  nombre:{
    type: String,
    required: true,
    trim: true,
},
categoriaPremio:{
  type: String,
  required: true,
  trim: true,
},
historiaPremio:{
  type: String,
  required: true,
  trim: true,
},
listaGanadores:{
  type: String,
  required: true,
  trim: true,
}

},
{
  timestamps: true,
}
);

const Premio = mongoose.model("Premio", premioSchema);

export default Premio;