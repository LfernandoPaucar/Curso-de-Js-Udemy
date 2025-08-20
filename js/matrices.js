//MATRICES EN JS

let matriz = [[],[]];


//Modificar los valores
//Reglon 0:
matriz[0][0] = 10;
matriz[0][1] = 20;
matriz[0][2] = 30;

//Reglon 1:

matriz[1][0] = 40;
matriz[1][1] = 50;
matriz[1][2] = 60;



console.log(`Elemento[0][1] = ${matriz[0][1]}`);
console.log(`Elemento[1][2] = ${matriz[1][2]}`);

//Version Simplificada:

let matrizCuy = [[100, 200, 300],[400, 500, 600]];

console.log(`ElementoCuy[0][1] = ${matrizCuy[0][1]}`);
console.log(`ElementoCuy[1][2] = ${matrizCuy[1][2]}`);


let matrizCapi = [[1000, 2000, 3000],[4000, 5000, 6000]];

//No. reglones
console.log(matrizCapi.length);
//No. col (Depende del reglon seleciocionado):
console.log(matrizCapi[0].length);
console.log(matrizCapi[1].length);


for(let ren = 0; ren < matrizCapi.length; ren++){
    //columnas
    for(let col = 0; col < matrizCapi[ren].length; col++){
        console.log(`Elemento[${ren}][${col}] = ${matrizCapi[ren][col]}`);
    }
}