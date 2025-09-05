//Concatenacion de cadenas:

let cadena1 = "Hola";
let cadena2 = "mundo";
let cadena3  = cadena1 + cadena2;
console.log(cadena3);

//String interpoletion:
let cadena4 = `${cadena1} ${cadena2}`;
console.log(cadena4);


/*
//Convertir de cadena a numero:
let a = "10", b = "20";
// Si son cadenas se concatenan:
console.log(a + b);

let suma = parseInt(a) + parseInt(b);
console.log(suma); */

//Convertir numero a cadena:

let a = 10, b = 20;
// Si son valores numericos se suman
console.log(a + b);
//Convertir numero a cadena
let concatenacion = a.toString() + b.toString();
console.log(concatenacion);

// Valor absoluto:

let numero = -10;
let valorAbsoluto = Math.abs(numero);
console.log(valorAbsoluto); 

// Funcion de redondeo y truncado:
let numeroEjemplo = 8.5, redondeo, truncado;

//Redondeo
// Math.round() redonde al valor entero mas cercano
// .5 0 superior, redondea al valor  entero superior mas cercano
redondeo = Math.round(numeroEjemplo);
console.log(redondeo);

// Truncado
// Math.trunc() elimina la parte flotante osea la decimal
truncado = Math.trunc(numeroEjemplo);
console.log(truncado);