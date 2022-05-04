let variable = "holll";

let auto = {
    marca: "Hyundai",
    anio: 2010,
    color:"rojo",
    puertas: 5,
    abs: "si",
    cinturones:5,
    fullEquipo:false

}
//modificacion directa de un solo valor
auto ["marca"]="Peu";
console.log(auto)
console.log("Frenos " +auto.abs+ "\ncinturones: "+auto.cinturones);

//console.log(auto)
triangulo ={
    a:2,
    b:3,
    c:4,
    perimetro: function(){
        return this.a+ this.b+ this.c;
    }
}
console.log(triangulo)
console.log(triangulo.perimetro());
//re-definicion de auto

let otroAuto={
    marca: "mitsubishi",
    modelo: "montero",
    color:"negro",
    puertas:5,
    escibirMarca:function(){
        console.log(this.marca);
    },
    escribirTodosLosDatos:function(){
        console.log(this.marca+","+this.modelo+ ","+this.color+"," +this.puertas);
    }
}
console.log(otroAuto.marca);
console.log(otroAuto.modelo);
console.log("----------");
otroAuto.escibirMarca();
console.log("----------");
otroAuto.escribirTodosLosDatos();

var cuadrilatero ={
    lado1: 2,
    lado2: 3,
    perimetro:function(){
        return this.lado1*2 + this.lado2 *2;
    },
    area:function(){
        return this.lado1*this.lado2;
    }
}

var miarreglo = ["uno", 2, true, "hola que tal"];
//segungo elemento
console.log(miarreglo[3]);

var miarreglo2 = ["uno" ,2, true, cuadrilatero];
console.log(miarreglo2[3]);
console.log(miarreglo2[3].lado1);

var miarreglo3 =[
    {lado1:10, lado2: 20},
    {lado3: 4, lado4: 55},
    {lado:8, lado5:4}
]

for (i =0; i<= miarreglo3.length -1; i++){
    console.log(miarreglo3[i]);
}
var persona = [
    {nombre: "Alfredo", casa:"si", rut: "15.594.051-4"},
    {direccion:"casa1", hijos: 4, sueldo:2000},
    {casado:"si", piezas:3}
]
console.log("----------");
for (i =0; i<= persona.length -1; i++){
    console.log(persona[i]);
}
automas ={
    marca:"mazda",
    modelo:"3",
    anio: 2012,
    color:"azul"
}
//recorre y escribe identificaDORES DE LAS PROPIEDADES
console.log("recorre y escribe identificaDORES DE LAS PROPIEDADES")
for(let elemento in automas){
    console.log(elemento);
}

//RECORRE Y ESCRUBE VALORES DE LAS PROPIEDADES
console.log("RECORRE Y ESCRUBE VALORES DE LAS PROPIEDADES")
for(let elemento in automas){
    console.log(automas[elemento]);
}
console.log("==================")
for(let elemento in automas){
    console.log(elemento+ " : " +automas[elemento]);
}