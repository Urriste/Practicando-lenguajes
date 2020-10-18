let jugador1 = prompt("Jugador 1, elija su nombre");
let jugador2 = prompt ("Jugador 2, elija su nombre ");


let numero = (Math.floor(Math.random ()*3)+1);
let numero2 = (Math.floor(Math.random ()*3)+1);

let eleccion1 = "";
let eleccion2 ="";

switch (numero){
	case 1:
		eleccion1 = "piedra";
	break;
	case 2: 
		eleccion1 = "papel";
	break;
	case 3:
		eleccion1 ="tijera";
	break;
	default:
		console.log ("flashaste");
	break
}


switch (numero2){
	case 1:
		eleccion2 = "piedra";
	break;
	case 2: 
		eleccion2 = "papel";
	break;
	case 3:
		eleccion2 ="tijera";
	break;
	default:
		console.log ("flashaste");
	break
}

console.log ("A " + jugador1 + " le tocó " + eleccion1);
console.log ("A " + jugador2 + " le tocó " + eleccion2);


function ganador (eleccion1, eleccion2) {
			//Casos si Jugador 1 tiene piedra//
	if ((eleccion1 == "piedra") && (eleccion2 == "papel")){
		console.log ("El ganador es: " + jugador2);
	}
	
	if ((eleccion1 == "piedra") &&(eleccion2 == "tijera")){
		console.log ("El ganador es: " + jugador1);
	}
	
	//Casos si Jugador 1 tiene papel//
	if ((eleccion1 == "papel") && (eleccion2 == "piedra")){
		console.log ("El ganador es: " + jugador1);
	}
	
	if((eleccion1 == "papel") && (eleccion2 == "tijera")){
		console.log ("El ganador es: " + jugador2);
	}
	

	//Casos si Jugador 1 tiene tijeras//
	if ((eleccion1 == "tijera") && (eleccion2 == "papel")){
		console.log ("El ganador es: " + jugador1);
	}
	
	if ((eleccion1 == "tijera") && (eleccion2 == "piedra")){
		console.log ("El ganador es: " + jugador2);
	}

	if (eleccion1 == eleccion2){
		console.log ("Es un empate!");
	}

}

ganador(eleccion1, eleccion2);






