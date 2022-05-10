var titulo = document.querySelector('h1');
var parrafo = document.querySelector('p');

console.log(titulo);
console.log(document.querySelector('h1'));

titulo.textContent = "texto desde cconsola JS"
parrafo.innerHTML = "Canmbio de text";

titulo.appendChild(parrafo);
// parte

var div = document.getElementById("columnas");
div.classList.add ('divmodificado')

var divSQ = document.getElementById("square");

setInterval(function(){
    
    if (div.classList=="square") {
        div.classList="";
        console.log("Se quita la clase");

    } else  {
        div.classList="square";
        console.log("Se agrega la clase");
    }

},1000)



