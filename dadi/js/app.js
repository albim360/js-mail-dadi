function playGame() {
    // Genera i numeri casuali per il giocatore e il computer
    var playerNumber = Math.floor(Math.random() * 6) + 1;
    var computerNumber = Math.floor(Math.random() * 6) + 1;
    
    // Crea un array per memorizzare i punteggi
    var scores = [playerNumber, computerNumber];
    
    // Confronta i numeri per stabilire il vincitore
    var winner;
    if (playerNumber > computerNumber) {
      winner = "Giocatore";
    } else if (computerNumber > playerNumber) {
      winner = "Computer";
    } else {
      winner = "Pareggio";
    }
    
    // Stampa il risultato
    alert("Il giocatore ha totalizzato " + scores[0] + ", il computer ha totalizzato " + scores[1] + ". Il vincitore è " + winner + ".");
  }