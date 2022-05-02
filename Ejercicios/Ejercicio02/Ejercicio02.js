var texto1 = prompt("Ingrese texto uno");
var texto2 = prompt("Ingrese texto dos");
if (texto1 == texto2){
    alert("True, son los dos textos iguales")
}else{
    alert("False, son texto distintos")
}
var num = prompt("ingrese numero");
if( texto1 == texto2 && (!isNaN(num))){
    alert("true, se ingreso un numero y los textos son iguales");
}else{
    alert("false, no se ingreso un numero");
}