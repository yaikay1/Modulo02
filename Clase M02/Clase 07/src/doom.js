var encabezado = document.querySelector("#header");
encabezado.className ="estilo2";

var tituloPrincipal = document.querySelector("#header h1");

//solo carga el texto//

tituloPrincipal.innerHTML="<i>titulo cambiado</i>";

var primerParrafo = document.querySelector(".estilo1");
primerParrafo.innerText = "hola qqqqqqqqq";

var parrafos = document.querySelectorAll("p");
parrafos[1].className ="estilo2";

for (i=0;  i < parrafos.length ; i++){
    parrafos[i].innerText ="-------------------------";
}

var link = document.querySelector ("a");
console.log("link: " +link.getAttribute("href"));
link.setAttribute("href", "https://www.postgresql.org/");

// cambiar imagen
var imagen = document.querySelector("img");
imagen.setAttribute("src", "img/git2.jpg");

//var
var nuevoDiv = document.createElement("div");
nuevoDiv.innerText = "nuevo div";
nuevoDiv.style.color = "red";
//agregarlo a la pag
document.body.appendChild(nuevoDiv);

//agregar direccion al footer (dentro de un li)
var nuevoLi = document.createElement("li");
nuevoLi.innerText = "las calilas con las mojojo";
nuevoLi.className = "estilo3";
//como
var listaU1 = document.querySelector("ul");
listaU1.appendChild(nuevoLi)

//crear titulos, parrafo y link\
//titulo
var nuevoTitulo = document.createElement("h2");
nuevoTitulo.innerText = "subtitulos 3";
//crear parrafo //damos formatod y copntenido
nuevoParrafo = document.createElement("p");
nuevoParrafo.innerText = " este es un nuevo texto";
nuevoParrafo.className = "estilo2";

//crear link
var link2 = document.createElement("a");
link2.innerText = "ver mass"
link.setAttribute("href", "www.google.cl")

//agregar elementos 



