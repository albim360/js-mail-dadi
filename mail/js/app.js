// Definiamo l'array di email
const emailList = ["email5@yahoo.com", "email4@hotmail.com", "email3@libero.com", "tiziocaio@email.it", "email2@gmail.com", "email1@icloud.com"];

// Aggiungiamo altre email alla lista
emailList.push("email12@hotmail.com", "email11@yahoo.com");

// Funzione per controllare l'email dell'utente
function checkEmail() {
// Prendiamo la email inserita dall'utente
const userEmail = document.getElementById("userEmail").value;

// Verifichiamo se l'email dell'utente è nella lista
let emailFound = false;
for (let i = 0; i < emailList.length; i++) {
if (userEmail === emailList[i]) {
emailFound = true;
break;
}
}

// Mostriamo il risultato
const resultContainer = document.getElementById("resultContainer");
resultContainer.innerHTML = emailFound ? "Email " + userEmail + " trovata nella lista" : "Email " + userEmail + " non trovata nella lista";
resultContainer.classList.add(emailFound ? "success" : "fail");

// Fai scomparire il risultato dopo 5 secondi
setTimeout(function() {
    resultContainer.innerHTML = "";
    resultContainer.className = "";
}, 2500);


}

// Aggiungiamo l'evento click al bottone "Controlla email"
document.getElementById("checkEmailButton").addEventListener("click", checkEmail);