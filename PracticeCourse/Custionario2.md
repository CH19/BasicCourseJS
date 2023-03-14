/*
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un array?
¿Qué es un objeto?
¿Cuándo es mejor usar objetos o arrays?
¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
*/
//2
var ArrayEjemplo = [3,2,3,4,5,6,7,8];

var MostrarArray = function(ArrayEjemplo){
    return ArrayEjemplo[0];
}
//3
function e (Array){
     for (let index = 0; index < Array.length; index++) {
         console.log( Array[index]);
        
    }
}
//4
var User = {
    nombre: "christian",
    apellido: "La Cruz",
    correo: "chrislacruz@gmail.com",
    edad: 17,
    MayorEdad: false

};

function GetObject(object){
    for(const obj in object){
        console.log(obj + " " + object[obj])
    }
}