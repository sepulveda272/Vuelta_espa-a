import mongoose from "mongoose";

const ciclistasSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true,
    },
    edad:{
        type: String,
        required: true,
        trim: true,
    },
    descripcion:{
        type: String,
        required: true,
        trim: true,
    }
},
{
    timestamps: true,
}
);

const Ciclista = mongoose.model("Ciclistas",ciclistasSchema);

export default Ciclista