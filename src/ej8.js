import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from './modules/omdb-wrapper.js'

let resultado = null;
resultado  = await OMDBSearchByPage("cars", 1);
console.log("OMDBSearchByPage", resultado);

resultado  = await OMDBSearchByComplete("cars");
console.log("OMDBSearchByPage", resultado);

resultado  = await OMDBGetByImdbID ("tt005464");
console.log("OMDBSearchByPage", resultado);