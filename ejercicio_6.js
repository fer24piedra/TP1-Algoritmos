/*Crear el archivo “ejercicio_6.js”. Declarar un array llamado “meses” y que tenga guardado los meses
del año. Luego el usuario debe poder ingresar en el navegador un número de 1 al 12 y este le devolverá el
nombre del mes. Por ejemplo, escrib ir un 5 debe devo lver el mes mayo.
*/

const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
//acá es la primera parte declarando el array con los meses

function obtenerNombreMes(numeroMes) {
// Función para obtener el nombre del mes    
    return meses[numeroMes- 1];
} // Se resta 1 al número del mes porque los arrays en JavaScript son de índice cero. SI poner 0

const numeroMes = 5; // Acá se puedes cambiar el número para probar otros meses, se pone 5 como en la consigna
const nombreMes = obtenerNombreMes(numeroMes);
console.log(nombreMes); // se imprime "mayo"


