let dato, resultado;
// acá lo que se hace es declarar dos variables que serán usadas más tarde. La variable dato no se utiliza.
val1 = window.prompt("Introduce tu nombre", "...");
//Acá es un método de JS en donde "val1" es el primer valor que se pide "window.prompt" indica que se abrirá una venta pero se dejára para despúes el
//valor ingresado por el usuario.
val2 = window.prompt("Introduce tu apellido", "...");
//Es lo mismo que el caso anterio pero ahora se pide el apellido.
resultado =
//aquí se llama a la variable resultado.
`Concatenado tu nombre y apellido es: ${val1} ${val2} `
//Aquí se usan `` para mostrar el mensaje y luego concatener los val1 y val2.
document.write(resultado);
//esta línea imprime el resultado en pantalla. 