/*Ejercicio 9:
Crear un programa que recibe 5 (cinco) notas de un alumno, las mismas deben ser ingresadas por el
usuario y ser naturales < 11. Debe calcular el promedio e imprimir en pantalla si el valor de media es < 5
Reprobado ”, entre 6 y 8 Aprobado ” y si es mayor a 8 Sobresaliente
*/


function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}
// esta función la uso para calcular el promedio de un array de números

function determinarEstado(promedio) {
    if (promedio <= 5) {
        return "Reprobado";
    } else if (promedio >= 6 && promedio <= 8) {
        return "Aprobado";
    } else if (promedio > 8) {
        return "Sobresaliente";
    } else {
        return "Promedio inválido";
    }
}
// esta función es para determinar si es aprobado reprobado o sobresaliente del promedio. También un return por si se ingresa un numreo erroneo pero me sale mal con el decimal, no sé que error sea


let notas = [];
// este array es para almacenar las notas

for (let i = 0; i < 5; i++) {
    let nota;
    do {
        nota = parseInt(prompt(`Introduce la nota ${i + 1} (debe ser un número natural menor que 11):`), 10);
    } while (isNaN(nota) || nota < 0 || nota >= 11); // acá se valida que la nota sea un número real, o sea que no se pongan decimales, pero menor que 11
    notas.push(nota);
}
// se solicitamos al usuario que ingrese las notas

let promedio = calcularPromedio(notas);
// con esto se calculamos el promedio

let estado = determinarEstado(promedio);
// acá se determinamos el estado del alumno según el promedio

alert(`El promedio es: ${promedio.toFixed(2)}. Estado: ${estado}.`);
// acá se muostramos el resultado, pero hay algo que no me salió del todo bien, debo volver a revisarlo. 
