var num1 = Number(prompt("Ingrese numero"));
var resultado = num1 / num1;
if (num1 % 2 == 0 ){
    alert("Numero es par")
}else{
    alert("numero impar")
}

 
var edad = Number(prompt("Ingrese edad :"));
var sexo = Number(prompt("ingrese su sexo (1)Masculino / (2) Femenino"));

if(edad >60 && sexo == 2 ){
    alert("Esta en edad jubilarse como mujer");
}else if(edad >65 && sexo == 1){
    alert("Esta en edad jubilarse como varonr");
}else{
    alert("a[un no estiempo de jubilarse");
}