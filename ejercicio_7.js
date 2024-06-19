/**
 * A partir del siguiente array que se proporciona:
var valores = [true, false, 2, "hola", "mundo", 3, "char"];
1. Determinar cuál de los “ elementos de texto ” es mayor, es decir el que contenga más letras.
2. Imprimir estos elementos de menor a mayor cantidad de letras.
3. Determinar el resultado de las cuatro operaciones matemáticas básicas (suma, resta, multiplicación y
división) realizadas con los dos elementos numéricos
 */

var valores = [true, false, 2, "hola", "mundo", 3, "char"];
//Acá declaro el array


var textos = valores.filter(valor => typeof valor === 'string');
var mayorTexto = textos.reduce((a, b) => a.length > b.length ? a : b);
//cuál de los “elementos de texto” es mayor, es decir, el que contenga más letras

console.log("El texto con más letras es:", mayorTexto);

textos.sort((a, b) => a.length - b.length);
// imprimir estos elementos de menor a mayor cantidad de letras

console.log("Elementos de texto ordenados de menor a mayor cantidad de letras:");
textos.forEach(texto => console.log(texto));

var numeros = valores.filter(valor => typeof valor === 'number');
var [num1, num2] = numeros;
// se determina el resultado de las cuatro operaciones matemáticas básicas

var suma = num1 + num2;
var resta = num1 - num2;
var multiplicacion = num1 * num2;
var division = num1 / num2;

console.log("Resultados de las operaciones matemáticas básicas:");
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);