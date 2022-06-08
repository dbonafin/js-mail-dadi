const myButton = document.getElementById ("my-button");

myButton.addEventListener("click",
    function() {
    // CALC THE RANDOM USER NUMBER BETWEEN 1 AND 6
    const userNumber = Math.floor( Math.random() * 6) + 1;

    // CALC THE RANDOM COMPUTER NUMBER BETWEEN 1 AND 6
    const computerNumber = Math.floor( Math.random() * 6) + 1;

    // CHECK WHO WINS AND PRINT THE OUTPUT WITH THE RESULT OF THE GAME 
    if (userNumber > computerNumber) {
            alert ("Hai vinto! Il numero scelto da te è più grande del numero scelto dal computer");
        } else if (userNumber === computerNumber) {
            alert ("Wow! Il numero scelto da te è uguale al numero scelto dal computer");
        } else if (userNumber < computerNumber) {
            alert ("Hai perso! Il numero scelto da te è più piccolo del numero scelto dal computer");
        } 
    }
);

