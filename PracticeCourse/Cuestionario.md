/* Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una variable y para qué sirve?

Una Variable es el nombre que le damos a un espacio de memoria

¿Cuál es la diferencia entre declarar e inicializar una variable?
Cuando declaras una variable estas asignandole un nombre a ese espacio de memoria, cuando la inicializas le dices que quieres que almacene

¿Cuál es la diferencia entre sumar números y concatenar strings?
Sumar numeros solo lo pueden hacer las Variables tipo Number y sirve para añadir alguna cantidad a una variable como siempre se ha hecho, sin embargo concatenar
es añadir a un String otro para su impresion como un mensaje conectado con una variable y asi por el estilo

¿Cuál operador me permite sumar o concatenar?
El operador de la suma el signo "mas" (+)

2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
Nombre
Apellido    r: String
Nombre de usuario en Platzi r: String
Edad r: Number
Correo electrónico r: String
Mayor de edad r: Booleano
Dinero ahorrado r: Number
Deudas r: number
3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
*/
var firtsName = "Christian"    
var LastName = "la Cruz";
    var UserName = "CHCC";
    var age = 17;
    var Email = "chcc@gmail.com"
    var Adult = false;
    var ActualMoney = 12;
    var Deudas = 0;
/*
4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)
*/
var CompleteName = firtsName + LastName;
var RealMoney = ActualMoney - Deudas;

console.log(CompleteName)
console.log(RealMoney);