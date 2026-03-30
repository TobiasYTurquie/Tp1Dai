import fs from 'fs';
const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";
console.clear();
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);
function copiar(origen, destino){
fs.rename(origen, destino, () => {console.log("Rename completado")})
fs.rename(destino, origen, () => {console.log("Rename completado")})
}