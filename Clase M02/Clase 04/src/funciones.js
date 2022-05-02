/*function cumpleConNombre(Nombre){
    console.log("genial");
    console.log("que lo pases bien ");
    console.log(" otras");
    console.log("listos " + Nombre);
    console.log(" otras");

}

cumpleConNombre("alejandro");*/

var valor = Math.pow(2,3);
console.log(valor);

// funcion cuadrado
function cuadrado(numero){
    var resultador = numero * numero;
    return resultador;
}

console.log(cuadrado(5));

function potencia(base, exponente){
    var resultado = 1;
    var contador = 0;
    while (contador < exponente){
        resultado = resultado*base;
        contador++;
    }
    return resultado;
}
var pot = potencia(3,4);
console.log(pot);

function mayor(num1, num2){
    if (num1 >num2){
        return num1;
    }else if(num2 > num1){
        return num2;
    }else{
        return o;
    }
}

var ejer = mayor(3, 3);
console.log(ejer);
