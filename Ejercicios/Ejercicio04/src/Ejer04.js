
var casa = Number(prompt("Ingrese numero inicio : "));
var casa2 = Number(prompt("Ingrese numero final : "));

contar(casa, casa2);

function contar(numb1, numb2){
    var dato1 = Number(numb1);
    var dato2 = Number(numb2);
    while( dato1 <= dato2){
        console.log(dato1);
        dato1++;
    }
}

// 2 parte del ejercicio me falta completar pero se que deber[ia ser un array
/*

for (var numb1 = 1; numb1 <= 100; numb1++)
 {
    if ((numb1 % 3 == 0) && (numb1 % 5 == 0) ) {
        console.log("FizzBuzz")
        console.log(numb1);
    }else if(numb1 % 3 == 0){
        console.log("Fizz");
        console.log(numb1);
    }else if(numb1 % 5 == 0){
        console.log("Buzz");
        console.log(numb1);
    }
}
*/