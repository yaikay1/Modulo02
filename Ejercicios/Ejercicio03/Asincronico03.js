
var s = 1;

while(s !=2){
    var opcion = Number(prompt("Juego Piedra(1)..Papel(2)..Tijera(3)..Ingrese opcion : " ));
    var juego = Math.floor(Math.random() * 3) + 1; 
    if ( opcion == 1 && juego == 1 ){
        alert("Empate.. computadora uso piedra" );
    }else if( opcion == 1 && juego == 2 ){
        alert("Perdiste, computadora uso papel")

    }else if( opcion == 1 && juego == 3 ){
        alert("Ganaste, computadora uso tijera");

    }else if ( opcion == 2 && juego == 1 ){
        alert("Ganaste, computadora uso piedra");
        
    }else if( opcion == 2 && juego == 2 ){
        alert("Empate.. computadora uso papel" );

    }else if( opcion == 2 && juego == 3 ){
        alert("perdise, computadora uso tijera");
    
    }else if ( opcion == 3 && juego == 1 ){
        alert("Perdiste.. computadora uso piedra" );

    }else if( opcion == 3 && juego == 2 ){
        alert("Ganaste, computadora uso papel");

    }else if( opcion == 3 && juego == 3 ){
        alert("empate, computadora uso tijera");

    }

    var respuesta = Number(prompt( "deseas seguir jugando : (1 = SI / 2 = NO"));
    if (respuesta == 2 ){
        s = 2;
    } 

}
    
    
    
    
    
    
    
    



