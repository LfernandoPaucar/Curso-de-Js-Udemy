// Procedimiento JS
// 1.-Definir el procedimiento
function saludar (mensaje){
    //Cuerpo de la funcion
    console.log(`Mensaje: ${mensaje}`);
}

// 2.- Llamar el procedimiento

saludar("Hola mundo");

// Funciones parte 2:

// Declarar la funsion:
function sumar (a, b){
    let resultadoSumar = a + b;
    return resultadoSumar;
}

// 2. Llamar la funcion:

let argA = 5;
let argB = 7;
let resultado = sumar(argA, argB);

console.log(resultado);

//// Paso por valor en JS
// Pasando informacion de tipo primtivo (number, bool, string);
/*
function cambiarValor (parametro){
    parametro = 20;
}

let argumento = 10;
cambiarValor(argumento);
console.log(argumento);
*/
////Paso por referencia
//Objetos (array) se pasan por referencia

function cambiarValor(parametro){
    parametro[0] = 20
}

//Llamamos a l funcion 
let arreglo = [10];
console.log(`Antes de funcion: ${arreglo[0]}`);
cambiarValor(arreglo);
console.log(`Despues de funcion: ${arreglo[0]}`);

///// Cadenas y funciones e JS:
//Cadenas inmutables en Js (nose pueden modificar);

function cambiarSrting (string){
    string = "Adios";
}


// Llamamos a la funcion

let argumento = "Hola";
console.log(`Antes de funcion: ${argumento}`);
cambiarSrting(argumento);
console.log(`Despues de funcion: ${argumento}`);

// Alcance de variables Js:

let variableGlobal = 5;

// Define funcion

function miFuncion (variableLocal){
    console.log(`variableLocal ${variableLocal}`);
    // Modificamos la variable global
    variableGlobal = 20;   
}

// Llamamos a la función

miFuncion(variableGlobal);

console.log(`variableGlobal ${variableGlobal}`)