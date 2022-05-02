function incioPrimera(){
    alert("funcion realizada");
}
/*
incioPrimera();
incioPrimera();
incioPrimera();
incioPrimera();*/

var contador =0;
while(contador<5){
    incioPrimera();
    contador++;
}
function cumple(){
    console.log("genial");
    console.log("que lo pases bien ");
    console.log(" otras");
    console.log("listos ");
}

function cumpleConNombre(Nombre){
    console.log("genial");
    console.log("que lo pases bien ");
    console.log(" otras");
    console.log("listos " + Nombre);
    console.log(" otras");

}

cumpleConNombre("alejandro");