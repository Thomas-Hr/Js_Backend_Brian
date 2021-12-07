// import _ from "lodash";
// import heroes from "./heroes.js";
import {getlibros,addlibros,getlibrosId,deletelibrosId} from "../controller/ContactoController.js";
        
//EndPoints del proyecto // ponen info solo en JSON
//Deben ser rutas REST

const rutas = ( app ) => {
    app.route('/libros')
        .get(getlibros)
        .post(addlibros)
    app.route('/libros/:librosid')
        .get(getlibrosId)
    app.route('/libros/delete/:librosid')
        .get(deletelibrosId)
}
export default rutas; 







