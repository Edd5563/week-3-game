var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
// the array of letters

var usedLetters = [''];


var lettersToGuess = 9; // Total guesses before game is considered a loss

var gameOver = false; //at start game over is false.

var wins = 0;
var loss = 0;


document.onkeyup = function(event) {

var compGuess = letters[Math.floor(Math.random()*letters.length)];
var letterPressed = String.fromCharCode(event.keyCode).toUpperCase();

console.log('Computers Guess ' + compGuess);
console.log('Users Guess ' + letterPressed);

// This is where the magic happens

   if(letterPressed != compGuess) { 
   document.getElementById('result').innerHTML=('---------Incorrect, you have '+ lettersToGuess+ ' guesses left-----------');
   lettersToGuess--;
   usedLetters.push(letterPressed);
   } else { 
   document.getElementById('result').innerHTML=('--------------Correct Game reset----------------');
   wins++;
   lettersToGuess = 9;
   usedLetters = [];
   } 

   if (lettersToGuess == 0) {
   console.log('Game Over');
   loss++;
   lettersToGuess = 9;
   usedLetters = [];
   } 


document.getElementById('score').innerHTML = "Wins " +wins +" Losses " +loss;
document.getElementById('keysPressed').innerHTML = "Letter you have used are "+ usedLetters ;

}


