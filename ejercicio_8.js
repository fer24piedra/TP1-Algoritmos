/*Ejercicio 8:
Escribir un script que muestre la posición de la primera vocal de un texto introducido por teclado. Por
ejemplo perro = “e” es la letra Nº 2 árbol = “a” es la letra Nº1
*/


function encontrarPrimeraVocal(texto) {
    
    const vocales = 'aeiouAEIOU';
// se escribe una función para encontrar la posición de la primera vocal en un texto
// luego se Definen las vocales que se quieren encontrrar   
    
            for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            return {
                vocal: texto[i],
                posicion: i + 1 // +1 para convertir de índice a posición humana
            };
        }
    }
    return console.log(`No se encontró ninguna voval`);
    //esto es po si no encontramos ninguna coval 
}
// se recorre el texto para encontrar la primera voval con el for


const textoIngresado = prompt("Por favor, introduce un texto:");
// se solicita al usuario que ingrese un texto


const resultado = encontrarPrimeraVocal(textoIngresado);
// se busca la primera vocal y su posición
if (resultado) {
    console.log(`La primera vocal es "${resultado.vocal}" y está en la posición Nº ${resultado.posicion}.`);
} else {
    console.log("No se encontró ninguna voval en el texto ingresado.");
}




