//---VARIABLES PARA RECUENTO DE VICTORIAS---//
let playerScore = 0;
let computerScore = 0;
let roundResult;



//---COMPARACION Y RESULTADO DE LA RONDA---//
function playRound(playerSelection, computerSelection) {

    //---OPCIONES GANADORAS PARA EL JUGADOR---//
    if ( (playerSelection === "Piedra" && computerSelection === "Tijeras") || 
         (playerSelection === "Papel" && computerSelection === "Piedra") || 
         (playerSelection === "Tijeras" && computerSelection === "Papel")) { 

            roundResult = "Ganaste, " + playerSelection + " gana a " + computerSelection + "!";
            playerScore++;

           //---OPCIONES PERDEDORAS PARA EL JUGADOR---//        
    } else if ((playerSelection === "Piedra" && computerSelection === "Papel") || 
               (playerSelection === "Papel" && computerSelection === "Tijeras") || 
               (playerSelection === "Tijeras" && computerSelection === "Piedra")) {

                roundResult = "Perdiste, " + computerSelection + " gana a " + playerSelection + "!";
                computerScore++;

                   //---OPCIONES DE EMPATE---//     
            } else if ((playerSelection === "Piedra" && computerSelection === "Piedra") || 
                       (playerSelection === "Papel" && computerSelection === "Papel") || 
                       (playerSelection === "Tijeras" && computerSelection === "Tijeras")) {

                        roundResult = "Empate!";
                
                    }

    return roundResult;

}

//---HACER JUEGO DE 5 RONDAS QUE LLEVE RECUENTO DE PUNTAJE Y DE GANADOR---//
function playGame() {
    
    let winner;
    let valor_de_playRound;

    for (let i = 1; i <= 5; i++) {
        
        const playerSelection = selection();
        const computerSelection = getComputerChoice();
        valor_de_playRound = playRound(playerSelection, computerSelection);

        console.log(valor_de_playRound);
    }

    if (playerScore > computerScore) {
        winner = "Ganaste la batalla!"
    } else if (playerScore < computerScore) {
        winner = "Perdiste la batalla :,("
    } else if (playerScore === computerScore) {
        winner = "La partida queda en empate!"
    }
    
    return winner;
}

//---SELECCION DE JUGADOR IGNORANDO MAYUS Y MINUS---//
function selection() {  

    let str = prompt("Seleccione su jugada");

    if (str === null) {

        console.log("Operacion cancelada")
        return null;
        
    } else {

        str = str.toLowerCase();
        
    }
    

    let upper = str.charAt(0).toUpperCase();
    let seleccion = upper + str.slice(1);
    return seleccion;

}

//---COMPUTADORA---//
function getComputerChoice(datos) {

    datos = ["Piedra", "Papel", "Tijeras"];
    let aleatorio = Math.floor( Math.random() * (datos.length) )
    return datos[aleatorio];

}
  
console.log(playGame());