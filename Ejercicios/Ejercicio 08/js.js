var color = document.getElementById('color');
console.log(color);

var texto = document.querySelector("input");

texto.addEventListener("keyup", function(info){
    if(info.key == "Enter"){
        var color  = texto;
        texto.style.backgroundColor = color.value;
    } else if ( info.key == "Backspace") {
        texto.style.backgroundColor="white"
    } 
})

