let x = 10;
console.log(x.length);

let persona = {
    nombre: "Geremi",
    apellido: "Perez",
    email: "gperez@gmail.com",
    edad: 20,
    idioma: "es",
    get lang (){
        return this.idioma.toUpperCase();
    },
    set lang (lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto (){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona.nombreCompleto);

console.log(persona.lang);

persona.lang = "por";

console.log(persona.idioma);

let coche = {
    marca : "mazda",
    modelo : 2019,
    color : "rojo",
    get apodo (){
        return this.marca + " " + this.color;
    }
}

console.log(coche.apodo);


