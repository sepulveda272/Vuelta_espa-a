import mongoose from "mongoose";

const etapasSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true,
    },
    fecha:{
        type: String,
        required: true,
        trim: true,
    },
    terreno:{
        type: String,
        required: true,
        trim: true,
    },
    salida:{
        type: String,
        required: true,
        trim: true,
    },
    llegada:{
        type: String,
        required: true,
        trim: true
    }
},
{
    timestamps: true,
}
);

const Etapa = mongoose.model("Etapas",etapasSchema);

export default Etapa