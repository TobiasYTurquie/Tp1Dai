/* Módulo  OMDBWrapper*/

import axios from "axios";


const APIKEY = "e9d7420b"


const OMDBSearchByPage = async (searchText, page = 1) => {
    const requestString = `http://www.omdbapi.com/?apikey=e9d7420b&s=${searchText}&page=${page}`;
    const apiResponse = await axios.get(requestString);
    let returnObject = {
        respuesta: true,
        cantidadTotal: apiResponse.data.totalResults,
        datos: apiResponse.data.Search
    };
    // No seas vago, acá hay que hacer el cuerpo de la función!!!
    return returnObject;

};


const OMDBSearchComplete = async (searchText) => {

    let returnObject = {

        respuesta: false,

        cantidadTotal: 0,

        datos: []

    };


    // No seas vago, acá hay que hacer el cuerpo de la función!!!

    return returnObject;

};


const OMDBGetByImdbID = async (imdbID) => {

    let returnObject = {

        respuesta: false,

        cantidadTotal: 0,

        datos: {}

    };

    // No seas vago, acá hay que hacer el cuerpo de la función!!!

    return returnObject;

};


// Exporto todo lo que yo quiero exponer del módulo:

export { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID };