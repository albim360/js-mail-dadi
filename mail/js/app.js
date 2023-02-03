// Definisci l'array di email
const emailList = ["email1@icloud.com", "email2@gmail.com", "email3@libero.com", "tiziocaio@email.it"];console.log(emailList)
emailList.push("email4@hotmail.com", "email5@yahoo.com");

console.log(emailList)

function checkEmail() {
  // Chiedi l'email all'utente
  const userEmail = prompt("Inserisci la tua email:");
  
  // Controlla se l'email dell'utente è nella lista
  let emailFound = false;
  for (let i = 0; i < emailList.length; i++) {
    if (userEmail === emailList[i]) {
      emailFound = true;
      break;
    }
    console.log(i)
  }
  
  // Stampa il risultato
  if (emailFound) {
    alert("Email trovata nella lista");
  } else {
    alert("Email non trovata nella lista");
  }
}
