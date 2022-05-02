/*
var num = Number(prompt("Ingrese un numero :"));

if (Number(num)){
    console.log(Number(num));
    console.log("conversion correcta");
}else{
    console.log(Number(num));
     console.log("conversion incorrcta");
}

var cuadrado = num * num;
alert("el cuadrado del : " +num+ " es " +cuadrado); */
/* pausa 
console.log("Inicio")
var contador = 0;
while(contador <=20){
    console.log("vuelta N!: "+contador +" solo para jugar" );
    contador = contador + 1;
    console.log("==================");
}

console.log("vueltas terminadas")
var palabra = "";

while(palabra !="chao"){
    palabra = prompt ("ingrese palabra :");
    if(palabra == "hola"){
        alert("hola, que tal");
    }else if(palabra == "chao"){
        alert("adios");
        break;
    }else{
        alert("no entiendo");
    }
}
*/
alert("debe ingresar un 0 para salir");
var parar =1;
var con=0;
var promedio = 0;
while(parar !=0){
     var notas =Number(prompt("ingrese nota"));
     if (notas == 0){
         parar = 0;
     }else{
        promedio = notas + promedio;
        con++;
     }
     
 }
 alert("su promedio de notas es: " +(promedio/con));