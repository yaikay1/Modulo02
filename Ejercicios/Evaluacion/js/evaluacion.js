var texto = document.querySelector("input");
var boton = document.querySelector("boton")

const button = document.querySelector("#boton")
button.disabled = true;

var palabraAleatoria = rValue;
var time = 10;
var score = 0;
var palabraIngresada = rValue


const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
    ];


// Genera palabra random

function randoXwords(array){     
    var rand = Math.floor(Math.random()*array.length);     
    var rValue = array[rand];     
    return rValue; 
}  
var rValue = randoXwords(words); 


// añade palabra a la web
function addToDOM(){
    let palabra = document.querySelector("#palabra");
    palabra.innerText = rValue;

}
addToDOM()


// Verificador palabras
texto.addEventListener("keyup", function(info){


    if(info.key == "Enter"){



        if ( rValue === texto.value){
             time += 3;
             score += 1;
             texto.value = "";
             updateScore()
             rValue = randoXwords(words);
             addToDOM()
            texto.style.backgroundColor="white"
            
            
        }
    } else {
        if ( rValue === texto.value) {
            texto.style.backgroundColor="green";
        } else {
            texto.style.backgroundColor="red"
        }

    }
    
});

// Contador de tiempo
function updateClock() {
    document.getElementById('cuenta').innerHTML = time;
    if(time==0){
    //alert('Perdiste');
        var cuenta = document.getElementById('cuenta').innerHTML = "GAME OVER";
        this.texto.disabled = true;
        button.disabled = false;
        button.addEventListener("click", function(info){
            jugarDeNuevo();
        });
        
         
    }else{
    time-=1;
    setTimeout("updateClock()",1000);
    }
}
updateClock();

// Contador de puntos
function  updateScore(){

    let puntaje = document.querySelector("#puntaje");
    puntaje.innerText= "Puntajes: "+score;

};
updateScore();

function activar(){
    window.onload = updateClock();
}
function jugarDeNuevo(){
    window.location.reload();
}
/*
function evento(){
    palabra();
    var ss = puntos();
    texto.addEventListener("keydown", () =>{
    if(texto.value == palabraAleatoria){
        //alert("bien hecho");
        time +=3;
        texto.value = "";
        palabraAleatoria = randoXwords();
        palabra.innerHTML = palabraAleatoria;
        score.innerHTML = "puntaje= " +ss;
        
    }
    })
}

var time = 10;
function updateClock() {
    document.getElementById('cuenta').innerHTML = time;
    if(time==0){
    alert('Final');
    }else{
    time-=1;
    setTimeout("updateClock()",1000);
    }
} 

formulario.addEventListener("submit", function(e){
    e.preventdefault();
})

*/