var figuras = ["triangulo", "cuadrado", "trapecio", "eso"];

console.log("avanza");
console.log("=====================")
for( var i=0; i <= figuras.length -1; i++){
    console.log(figuras[i]);
}
console.log("retrocede");
console.log("=====================")
for(i=figuras.length-1;i>=0; i--){
    console.log(figuras[i]);
}
console.log("estenose");
console.log("=====================")
figuras.forEach((a) =>{
    console.log(a);
})