import mongoose from "mongoose";

const equiposSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true,
    }
},
{
    timestamps: true,
}
);

const Equipo = mongoose.model("Equipos",equiposSchema);

export default Equipo