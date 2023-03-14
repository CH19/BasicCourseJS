var articulos = [
     {nombre: "sombrilla", costo: 1500 },
 {nombre: "TV", costo: 1000 },
 {nombre: "juguete", costo: 100 },
 {nombre: "Mueble", costo: 1700 },
 {nombre: "mesa", costo: 2500 },
 {nombre: "PS6", costo: 3500 },
]

var ArticulosBusqueda = articulos.filter(function(articulos){ //metodo filter nos permite filtrar informacion de un arreglo
    return articulos.costo <= 1500;
});

var NombreArticulos = articulos.map(function(articulos){ //metodo map es como un ciclo for mejorado 
    return articulos.nombre;
});

var encuentraArticulo = articulos.find(function(articulos){ /*nos permite ver una igualdad sobre un valor de un arreglo. Al igual que los anteriores metodos
    esto no es una alteracion al array si no que es la creacion de uno nuevo y mejorado*/
    return articulos.nombre === "mesa";
});

var articulosBaratos = articulos.some(function(articulos){
    return articulos.costo <= 700;
});
