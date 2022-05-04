let pelicula = [
    {viste: "Telnet", rating: "5 estrellas" },
    {viste: "rec", rating: "2 estrellas"},
    {loHasVisto:"secretos de dumbledore", rating: "4 estrellas"},
    {loHasVisto:"Doc Strange ", rating:"5 estrellas"}

]
for (i =0; i<= pelicula.length -1; i++){
    console.log(pelicula[i]);
}
//ejercicio 2

var palabra = prompt("Ingrese palabra");
var numero = Number(prompt("Ingrese numero"));

arreglos(palabra, numero);

function arreglos(palabras, number){
    let auxiliar = [];
     for ( i=1; i <= number; i++ && palabras == palabras){
            auxiliar.push({palabras: i});
     }
             console.log(auxiliar);
        
}