import { getCurrency } from 'country-currency-map' 

let monedaDelPais, codigoPais;
codigoPais = 'ARS';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais.name}`);
codigoPais = 'USD';
monedaDelPais = obtenerMoneda(codigoPais)
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais.name}`);
function obtenerMoneda(codigoPais){
return getCurrency(codigoPais)
} 
