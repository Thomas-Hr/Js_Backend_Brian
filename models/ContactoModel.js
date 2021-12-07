import mongoose  from "mongoose";

//Definir un objeto schema
const Schema = mongoose.Schema

//Definir estructura de entidades a registrar
const libroSchema = new Schema (
    {
        nombre:{
            type: String,
            required: "Nombre vacio"
        },
        titulo:{
            type: String,
            required: "tipo"
        },
        autor:{   
            type: String,
        },
        precio:{
            type: Number,
        },
        fecha_registro:{
            type: Date,
            default: Date.now
        }
    }
)
export default libroSchema

