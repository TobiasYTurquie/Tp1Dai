import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from './modules/omdb-wrapper.js'

let resultado = null;
resultado  = await OMDBSearchByPage("cars", 1);
console.log("OMDBSearchByPage", resultado);

for(let i = 1; i<=39; i++){
resultado  = await OMDBSearchComplete("cars",i);
console.log("OMDBSearchByPage", resultado);
}
resultado  = await OMDBGetByImdbID ("tt005464");
console.log("OMDBSearchByPage", resultado);