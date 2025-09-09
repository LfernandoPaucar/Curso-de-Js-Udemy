// Procedimiento JS
// 1.-Definir el procedimiento

/*
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
/*
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
*/

// Llamamos a la funcion
/*
let argumento = "Hola";
console.log(`Antes de funcion: ${argumento}`);
cambiarSrting(argumento);
console.log(`Despues de funcion: ${argumento}`);*/

// Alcance de variables Js:

//let variableGlobal = 5;

// Define funcion
/*
function miFuncion (variableLocal){
    console.log(`variableLocal ${variableLocal}`);
    // Modificamos la variable global
    variableGlobal = 20;   
}
*/
// Llamamos a la función
/*
miFuncion(variableGlobal);

console.log(`variableGlobal ${variableGlobal}`)
*/

/// Funciones recursivas
//Imprimir 3, 2, 1
/*

function funcionRecursiva(numero){
    //Caso base
    if(numero == 1){
        console.log(numero)
    } else {
        console.log(numero);
        funcionRecursiva(numero - 1);
    }
}

funcionRecursiva(10);*/
//Ejercicios 

//Ej 1:

//// Funcion saludo

//const mensajEnPantalla = document.getElementById("container-mensaje");

/*
function saludarAbrandon(){
    return "Yo sere programador"
}

let mensaje = saludarAbrandon();


mensajEnpantalla.textContent = mensaje; */

//Ej 2:

/*

function saludarAalguien (nombre){
    return "Hola " + nombre;
}

let nombreSaludo = prompt("Ingresa un nombre causita :D");

mensajEnpantalla.textContent = saludarAalguien(nombreSaludo); */

// Ej 3:
/*
const suma = (a, b) => {
    return a + b;
};

console.log(suma(5, 6))
*/

//Ej 4:

/*
function cuadradoCausa (numero){
    return numero * numero;
};

console.log(`El cuadrado causita es ${cuadradoCausa(4)}`); */

//////Nivel 2:

// Ej 1:

/*
let numeroInicial = parseInt(prompt("Inrgesa un numero batereia"));

function imprimirPares (limite) {
    for(i = 0; i < limite; i += 2){
        console.log(i);
    }
}

imprimirPares(numeroInicial); */

// Ej 2:
/*
function cualEsMayor (a, b){
    if(a > b){
        console.log(`El mayor es ${a}`);
        return
    } else if (b > a){
        console.log(`El mayor es ${b}`);
        return
    }
}

cualEsMayor(20, 10); */

//Ej 3:

// Tabla de multiplicar:

/*
function multiplicarTabla (numero){
    let multiplicador = numero;
    let limite = 12;
    for(i = 1; i <= limite; i++){
        console.log(`${i} x ${numero} es = ${i * multiplicador}`);
    }
}

multiplicarTabla(12); */

// Ej 4:

////Contar vocales:

/*
function contarVocales (palabra){
    let contador = 0;
    let vocales = "aeiouAEIOU"

    for (let i = 0; i < palabra.length; i++){
        if(vocales.includes(palabra[i])){
            contador++;
        }
    }

    return contador;
}

let nombre = prompt("Ingrese su nombre");

console.log(`${nombre} tiene ${contarVocales(nombre)} vocales`); */


///// Nuevos ejercicios:

//Ej.1

//Saludo personalizado

/*
function saludoPersonalizado (nombre){
    console.log(nombre)
}

let dato = prompt("Ingresa tu nombre causita");

saludoPersonalizado(dato); */

//Ej.2

// Identifica si una palabra es palindromo:
/*
function esPalindromo (palabra){
    palabra = palabra.toLowerCase();


    let invertida = palabra.split("").reverse().join("");

    return palabra === invertida;
}


console.log(esPalindromo("oso")); */


//Ej.3
// Retornar el factorial de un numero
/*
function factorial(n){
    let resultado = 1;
    for (let i = 1; i <= n ; i++){
        resultado *= i;
    }
    return resultado;
}

console.log(factorial(3));*/

//Ej.4 Suma digitos

/*
function sumarDigitos(n){
    let numeroString = n.toString();
    let suma = 0;

    for (let i = 0; i < numeroString.length; i++){
        let numero = parseInt(numeroString[i]);
        suma += numero;
    }

    return suma;
}

console.log(sumarDigitos(2345));*/

//Ej.5 Edad minima

/*
let edadAdulto = 18;

function edadMinima(edad){
    if( edad >= edadAdulto){
        return "Eres mayor de edad, puedes pasar";
    } else{
        return "Eres menor de edad, no puedes pasar";
    }
}

let dato = parseInt(prompt("Ingresa tu edad bro"));


mensajEnPantalla.textContent = edadMinima(dato); */
let mensajEnPantalla = document.getElementById("container-mensaje");

// Ej.6 Calificación escolar
/*
function calificacionEscolar(nota){
    if( nota > 20){
        return "La nota no es valida";
    } else if (nota < 0){
        return "La nota no es valida";
    } else if (nota >= 11 && nota <= 14){ 
        return "Aprobado, su alumno se salvo por poco";
    }else if (nota >= 15 && nota <= 17) {
        return "Aprobado, buena nota";
    }else if (nota >= 18 && nota <= 20) {
        return "Aprobado, su alumno es un chucha";
    }else {
        return "Reprobado, su alumno es un burro";}
}

let notaAlumno = parseFloat(prompt("Ingresa la nota del alumno"));

mensajEnPantalla.textContent = calificacionEscolar(notaAlumno); */