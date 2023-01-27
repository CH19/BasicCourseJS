function Saludar(Persona){
    console.log("Buenos dias " + Persona);
}
/*for(let i = 1; i < 10; i++){
    console.log(i);
}*/

var nombres = ["Christian", "juan", "Fabi", "Juana"];

for (var nombre of nombres) {
    Saludar(nombre)
}

var hola = "hola";


console.log(Number(hola));