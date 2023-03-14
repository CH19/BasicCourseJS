function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
function SaberAsistencia(dia){
    
    let Probabilidad = probaly();

    if (!Probabilidad){
        return "A"
    }else {
        return "P"
    }


}
function probaly(){
    let status=Math.round(Math.random())
    console.log(status)
    if(status==1)
    {
    status=true
    }else{
    status=false
    }
    console.log(status)
}
const CantidadEstudiantes = 30;
let estudiantes = [];

const mes = 30;
const minN = -1;
const maxN = 1;
for(let i = 0; i < CantidadEstudiantes; i++){
    let AsistenciaDia = [];
    
    for(let k = 1; k <= mes; k++){
    estudiantes[i] = {
     nombre: i,
       
    }
    }
    AsistenciaDia[k] = SaberAsistencia(k),

    
    console.table(estudiantes[4])
}
for(let k = 1; k <= mes; k++){
   
}







