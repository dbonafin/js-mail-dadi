// ASK THE USER A NUMBER BETWEEN 1 AND 6
let userNumber = parseInt( prompt("Digita un numero compreso fra 1 e 6") );

// CALC THE RANDOM COMPUTER NUMBER
const computerNumber = Math.floor( Math.random() * 6) + 1;

// CHECK IF THE USER USES A VALID NUMBER 
// IF IT IS NOT VALID PRINT AN ERROR ALERT
// IF IT IS VALID PRINT THE OUTPUT WITH THE RESULT OF THE GAME 
if (userNumber > 6 || userNumber < 1) {
    alert ("Errore! Numero non valido");
} else if ( isNaN(userNumber) ) {
    alert ("Errore! I caratteri diversi dai numeri non sono ammessi");
} else if (userNumber > computerNumber) {
    alert ("Hai vinto! Il numero scelto da te è più grande del numero scelto dal computer");
} else if (userNumber === computerNumber) {
    alert ("Wow! Il numero scelto da te è uguale al numero scelto dal computer");
} else if (userNumber < computerNumber) {
    alert ("Hai perso! Il numero scelto da te è più piccolo del numero scelto dal computer");
} 


