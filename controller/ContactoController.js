import { request, response } from "express";
import mongoose  from "mongoose";
import libroSchema from "../models/ContactoModel.js";

//DAO de contacto
const libros = mongoose.model('libreria', libroSchema)



//accion para insertar una nueva juegos
export const addlibros = ( request, response ) => {
    // crear nueva juegos
    let nuevoLibro = new libros( request.body )
    // grabar nueva juegos
    nuevoLibro.save( ( error , libro) => {
        if(error){
            response.send(error)
        }else{
            response.json(libro)
        }
    })
}




//Accion para seleccionar todas las personas:
export const getlibros = ( request, response) => {
    libros.find( {}, ( error , libro) => {
        if(error){
            response.send(error)
        }else{
            response.json(libro)
        }
    })
}

export const getlibrosId = ( request, response ) =>{
    libros.findById( request.params.librosid, ( error , libro) => {
        if(error){
            response.send(error)
        }else{
            response.json(libro)
        }
    })
    
}


export const deletelibrosId = ( request, response )=>{
    libros.deleteOne( { _id: request.params.librosid} , ( error , juego) => {
        if(error){
            response.send(error)
        }else{
            response.json({mensaje: "libro borrado "})
        }
    } )    
}






