
function contar(numb1, numb2){
    var dato1 = Number(numb1);
    var dato2 = Number(numb2);
    while( dato1 <= dato2){
        console.log(dato1);
        dato1++;
    }
}
function contarDeA_n(contar_de_a, contar_hasta) {
    dea_ = 2
    var conta = 0
    while (conta < contar_hasta) {
        conta += contar_de_a;
        console.log(conta)
        var funcion = conta





    }
    return funcion
}
var contador = contarDeA_n(2, 10)
console.log("la cuenta llega hasta " + contador)

function fizzBuzz(num1, num2) {
    y = 1;
    while (y <= 100) {
        y += 1
        if (y % num1 == 0 && y % num2 == 0) {
            console.log(y + "FizzBuzz");
        } else if (y % num2 == 0) {
            console.log(y + "Buzz");
        } else if (y % num1 == 0) {
            console.log(y + "Buzz");
        }
    }
}
fizzBuzz(3, 5)