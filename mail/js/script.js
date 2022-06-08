// ASK THE EMAIL TO THE USER
const userEmail = prompt ("Digita la tua email");

// LIST OF THE VALID EMAILS FOR THE LOGIN
const validEmailList = ["tizio@gmail.com", "caio@gmail.com", "pinco@gmail.com", "dbonafin@gmail.com"];

// CHECK IF IT IS PRESENT IN THE LIST OF VALID EMAILS 
let validationCheck = false;

for ( let i=0 ; i<validEmailList.length; i++ ) {
    const validEmail = validEmailList[i];

    if (validEmail === userEmail) {
        validationCheck = true;
    }
}

// PRINT THE OUTPUT RESULT WITH AN ALERT
if (validationCheck) {
    alert ("Benvenuto nella tua casella di posta elettronica");
} else {
    alert ("Accesso negato, prova con un'altra email");
}

