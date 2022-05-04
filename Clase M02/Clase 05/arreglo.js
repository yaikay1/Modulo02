function escribir(){
    console.log("Texto de ejemplo");
}

var palabra = "hola";
var palabra2 = "kasndkaskljdklajwlikjdklajskljdaw";

//indica cantidad de letras
console.log(palabra2.length);
console.log("Indica la primera letra de hola es :" + palabra[0]);
console.log("Indica la primera letra de hola es :" + palabra[1]);
console.log("Indica la primera letra de hola es :" + palabra[2]);
console.log("Indica la primera letra de hola es :" + palabra[3]);

var largoPalabra = palabra2.length;
console.log("la ultima les :" +palabra2[largoPalabra -1]);


let alumnos=["jaime", "luis", "alfredo", "Fernando"];
console.log("la cantidad total de alumnos es " + alumnos.length);
console.log("el segundo alues es" +alumnos[1]);
console.log("el ultimo es : " +alumnos[alumnos.length -1]);

//modificacionde un elemnto del arreglo
console.log("El tercer alumnos antes del cambio es: " + alumnos[2] +" !");
alumnos[2] = "matias";
console.log(" el tercer alumno ahora es: - " +alumnos[2]);

// agregar al final 
console.table(alumnos);
alumnos.push("Cleo");
console.table(alumnos);
alumnos.push("Gillermo","Patricia");
console.table(alumnos);

// sacar un elemento del array con pop
console.log("--------------------------");
console.table(alumnos);
let ultimo = alumnos.pop();
console.log("elemento despues del pop--");
console.table(alumnos);
console.log("el sacado es : " +ultimo);



