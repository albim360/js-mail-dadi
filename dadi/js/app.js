function playGame() {
    // Genera i numeri casuali per il giocatore e il computer
    let playerNumber = Math.floor(Math.random() * 6) + 1;
    let computerNumber = Math.floor(Math.random() * 6) + 1;
    
    console.log("Numero del giocatore:", playerNumber);
    console.log("Numero del computer:", computerNumber);
    
    // Crea un array per memorizzare i punteggi
    let scores = [playerNumber, computerNumber];
    console.log("Punteggi:", scores);
    
    // Confronta i numeri per stabilire il vincitore
    let winner;
    if (playerNumber > computerNumber) {
      winner = "il Giocatore";
    } else if (computerNumber > playerNumber) {
      winner = "il Computer";
    } else {
      winner = "Nessuno, è un pareggio";
    }
    
    console.log("Vincitore:", winner);
    
    // Stampa il risultato
    alert("Il giocatore ha totalizzato " + scores[0] + ", il computer ha totalizzato " + scores[1] + ". Il vincitore è: " + winner + ".");
  }
