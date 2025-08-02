// Ciclo While 
// Imprimir los valores del 0 al 5
/* let contador = 0, repeticiones = 5;

while(contador <= 5){
    console.log(contador++);
    //contador++;
} */

// Ejercicio 1:

// let variable = 10;

/* while(variable >= 1){
    console.log(variable);
    variable--;
}*/

/*let variable = 1;

while(variable <= 10){
    if(variable % 2 == 0){
        console.log(variable)
    };
    variable++;
} */

/* let numero = 0;

while(numero <= 100){
    numero = parseInt(prompt("Ingrese un numero mayor a 100"))
};
console.log("Correcto")*/

/*
let suma = 1000;
let i = 1;

while(i <= 50){
    suma -= i;
    console.log(suma);
    i++;
}

console.log("La resta es: " + suma);
*/

/////////////////////////////////////////////////////////

// Ciclo do while 

// Imprimir valores del 0 al 5
/*
let contador = 0, repeticiones = 5;

do{
    console.log(contador++);
    //contador++
}while(contador <= repeticiones);
*/

/*
let i = 2;
do {
    console.log(i);
    i += 2;
} while(i <= 20);
*/

/*
let numero;
do {
    numero = parseInt(prompt("Ingrese un numero (0 para salir)"));
    console.log("Ingresaste: " + numero);
} while (numero !== 0);
*/

/*
let numero = parseInt(prompt("Ingrese un numero para ver su tabla"));
let i = 1;

do{
    console.log(`${numero} x ${i} = ${numero * i}`);
    i++;
}while (i <= 12); */

/*
let i = 10;
do{
    console.log(i);
    i--;
} while(i >= 1); */

////////////////////////////////


////////////////////////////////////

// Ciclo do wihle

//Ejercicio imprimir de 3 en 3

/*
let maximo = 10, minimo = -10;

console.log("Incrementos de 3 en 3 ");

for(let numero = 1; numero <= maximo; numero += 3){
    console.log(numero);
}

console.log("Decremento de 3 en 3");
for(let numero = 1; numero >= minimo; numero -= 3){
    console.log(numero);
} */

// Ejercicio: Acumulador suma

//Realizar la suma de los primeros 5 numeros

/*
let suma = 0

for(let i = 1; i <= 5; i++){
    //Imiprimimos lo que se va a sumar
    console.log(`${suma} + ${i}`)
    //Realizamos la suma parcial
    suma += i;
    console.log(suma);
}

console.log(suma);

*/

/*
let suma = 0;
let i = 1;

while(i <= 5){
    suma += i;
    i++;
    console.log(suma);
}
console.log(suma);*/

let suma = 0;
let i = 1;
do{
    suma += i;
    i++;
    console.log(suma);
} while(i <= 5);