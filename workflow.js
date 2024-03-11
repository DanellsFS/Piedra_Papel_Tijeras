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

    const resultDiv = document.querySelector("#result");
    resultDiv.textContent = roundResult;

}

//---HACER JUEGO DE 5 RONDAS QUE LLEVE RECUENTO DE PUNTAJE Y DE GANADOR---//
function playGame() {
    let winner;

    for (let i = 1; i <= 5; i++) {
        const playerSelection = selection();
        if (playerSelection === null) {
            return; // Si la selección es nula, se cancela la operación.
        }

        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);

        // Muestra la puntuación en curso
        const scoreDiv = document.querySelector("#score");
        scoreDiv.textContent = `Jugador: ${playerScore} - Computadora: ${computerScore}`;
    }

    if (playerScore > computerScore) {
        winner = "¡Ganaste la batalla!";
    } else if (playerScore < computerScore) {
        winner = "¡Perdiste la batalla :,(";
    } else {
        winner = "La partida queda en empate.";
    }

    // Muestra al ganador
    const resultDiv = document.querySelector("#result");
    resultDiv.textContent = winner;
}

//---SELECCION DE JUGADOR IGNORANDO MAYUS Y MINUS---//
function selection() {

    let str;

    if (piedra.addEventListener("click", () => str = "Piedra")) {
        str = str.toLowerCase();
        let upper = str.charAt(0).toUpperCase();
        let seleccion = upper + str.slice(1);
        return seleccion;
        } else if (papel.addEventListener("click", () => str = "Papel")) {
            str = str.toLowerCase();
            let upper = str.charAt(0).toUpperCase();
            let seleccion = upper + str.slice(1);
            return seleccion;
            } else if (tijeras.addEventListener("click", () => str = "Tijeras")) {
                str = str.toLowerCase();
                let upper = str.charAt(0).toUpperCase();
                let seleccion = upper + str.slice(1);
                return seleccion;
            }

    if (str === null) {

        console.log("Operacion cancelada")
        return null;
        
    }

}

//---COMPUTADORA---//
function getComputerChoice(datos) {

    datos = ["Piedra", "Papel", "Tijeras"];
    let aleatorio = Math.floor( Math.random() * (datos.length) )
    return datos[aleatorio];

}
  


//---TODO LO GRAFICO---//

const piedra = document.querySelector(".piedra");
const papel = document.querySelector(".papel");
const tijeras = document.querySelector(".tijeras");
const partida = document.querySelector(".partidaBoton");

const resultDiv = document.createElement("div");
resultDiv.id = "result";
contenedor.appendChild(resultDiv);

const scoreDiv = document.createElement("div");
scoreDiv.id = "score";
contenedor.appendChild(scoreDiv);

piedra.addEventListener("click", () => {
    const playerSelection = "Piedra";
    const computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection);
  });
  
  papel.addEventListener("click", () => {
    const playerSelection = "Papel";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  });
  
  tijeras.addEventListener("click", () => {
    const playerSelection = "Tijeras";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  });

  partida.addEventListener("click", playGame)