const i1 = document.querySelector("#inputId1");
const i2 = document.querySelector("#inputId2");
const button = document.querySelector("button");
var Operacion = document.querySelector('.operacion')
var result;
var rr = 0;

/*function SumaConsola(val1, val2){
    Number(val1.value);
    Number( val2.value);
    console.log(val1 + val2);

}*/
let user = {
    nombre: "chrsitian",
    edad: 17, 
    SaberCosas: true
}
console.warn(user);
function SumaNumber(Operation,v1, v2){
    switch(Operation.value){ 
    case "Suma":
        rr = Number(v1.value) + Number(v2.value);
        console.log( Number(v1.value) + Number(v2.value));
        break;
    case "Resta":
        rr = Number(v1.value) - Number(v2.value);
        console.log( Number(v1.value) + Number(v2.value))  ; 
        break;
    case "Multiplicar":
      rr = Number(v1.value) * Number(v2.value);console.log( Number(v1.value) + Number(v2.value));
        break;
    case "Dividir":
        rr = Number(v1.value) / Number(v2.value);console.log( Number(v1.value) + Number(v2.value));
        break;
    default: console.log("compa hay un error");
   }
   document.write(`<h1>El resultado es: ${rr}</h1>
   <button onclick="ComeBack()">return</button>
   `);
}

function ComeBack(){
    document.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Manipulacion del Dom Basica</h1>
        <input type="text" class="operacion" placeholder="Escribe que operacion quieres hacer"> <br>
        <input type="text" name="" id="inputId1" placeholder="Escribe algo aqui">
        <input type="text" name="" id="inputId2" placeholder="Escribe algo aqui">
        <br>
        <button onclick="SumaNumber(Operacion,i1,i2)">Calcular</button>
        <!-- <button>return</button> -->
        <script src="./scripts.js"></script>
    </body>
    </html>`)
}
console.log(rr);

