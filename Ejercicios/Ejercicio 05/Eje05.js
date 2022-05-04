let sumArray = [1, 2, 3];
let sumArray2 =[10,3, 10, 4];
let sumArray3 = [-5, 100];
let todos = [sumArray, sumArray2, sumArray3];
let todasSumas = [1, 2, 3];

for(i=0; i <3; i++){
        todasSumas[i] = sumasDeArray(todos[i]);
        console.log("la Sume del array es: " +todasSumas[i]);

}
function sumasDeArray(arreglo){
    var suma= 0;
    arreglo.forEach(function(numero) {
        suma = suma +numero;
    });
    return suma;
}
/*
let suma = sumasDeArray(sumArray);
var suma2 = sumasDeArray(sumArray2);
var suma3 = sumasDeArray(sumArray3);
console.log(suma);
console.log(suma2);
console.log(suma3);
*/



