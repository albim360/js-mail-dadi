function playGame() {
  // Genera i numeri casuali per il giocatore e il computer
  let playerNumber = Math.floor(Math.random() * 6) + 1;
  let computerNumber = Math.floor(Math.random() * 6) + 1;

  // Confronta i numeri per stabilire il vincitore
  let winner;
  if (playerNumber > computerNumber) {
    winner = "Vince il Giocatore";
  } else if (computerNumber > playerNumber) {
    winner = "Vince il Computer";
  } else {
    winner = "Pareggio";
  }

  // Mostra il risultato
  let resultEl = document.getElementById("result");
  resultEl.innerHTML = `Il giocatore ha totalizzato ${playerNumber}, il computer ha totalizzato ${computerNumber}. ${winner}.`;
}
