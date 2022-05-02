var numEdad = prompt("ingrese su edad")

if (numEdad < 18){
    var resultado = 18 - numEdad;
    alert ("Te falta " + resultado + " años para ser mayor de edad")
}else{
    alert("usted es mayor de edad")
}

var num1 = Number(prompt ("ingrese primer numero"));
var num2 =  Number(prompt ("ingrese segundo numero"));
var eleccion = prompt ("escoga opcion : + , - , /, *");

if (eleccion == "+" ){
    alert ("resultado de la suma: " +(num1 + num2));
}else if(eleccion == "-"){
    alert("El resultado de la resta es : " +(num1 - num2));
}else if(eleccion == "/"){
   alert("El resultado de la resta es : " +(num1 / num2));

}else if(eleccion == "*"){
  alert("El resultado de la resta es : " +(num1 + num2));
}else{
    alert("debe ingresar lo solicitado");
}



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