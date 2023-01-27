var caso = 10;

switch(caso){

    case 1:
        console.log("elegiste el uno");
        break;
    case 3: 
        console.log("este es el caso 3 nos saltamos el 2");
        break;
    case 10:
        console.log("este es el caso 10 nos saltamos bastantes pero que lala");
        break;
    default: console.log ("seguramente esta es una opcion entre el 2,4,5,6,7,8,9 o 991 xd");
}

/* aqui este es el resultado de un pequeño desafio de platzi*/

export function solution(article) {
    // Tu código aquí 👈
    switch (article) {
      case "computadora":
        return "Con mi computadora puedo programar usando JavaScript";
        break;
      case "celular":
        return "En mi celular puedo aprender usando la app de Platzi";
        break;
      case "cable":
        return "¡Hay un cable en mi bota!"
        break;
      default:
        return "Artículo no encontrado"
    }
  }
  /**Saluditos mi gente @christianlacruzzz en ig /