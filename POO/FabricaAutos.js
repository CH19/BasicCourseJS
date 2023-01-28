/*El siguiente es un ejercicio de programacion el cual consiste en crear un arreglo de objetos tipo auto
y que estos se rellenen automaticamente o de la menor forma en la que el programador tenga que interacutar 
*/

function getAutos(marca, modelo, annio){
    this.marca = marca ;
    this.modelo = modelo;
    this.annio = annio;
}

var autos = [];

for(let i = 0 ; i < 30 ; i++){
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio));
  }
  
  for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
  }