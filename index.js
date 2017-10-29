document.querySelector("#startBtn").addEventListener("click", myFunction);

function myFunction() {
  var wrongGuess = 0;
  var correctGuess = [];
  var secretWord = prompt("For Player 1: Enter Your Secret Word");

  for (i = 0; i < secretWord.length; i++) {
    correctGuess.push("[_]");
  }
  while (wrongGuess !== 5 && correctGuess.indexOf("[_]") !== -1) {
    var guess = prompt(
      correctGuess.join(" ") + "\n" + "For Player 2: Guess a letter."
    );

    if (secretWord.indexOf(guess) === -1) {
      wrongGuess++;
      alert("Wrong Guess");
    } else {
      for (i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === guess) {
          correctGuess[i] = guess;
        }
      }
    }
  }


  if (wrongGuess === 5) {
    alert("You are a Loser..!! Try Again, " + "The Secret Word Was " + "\" " + secretWord + " \" ");
  } else if (secretWord === "") {
    alert("You Did Not Enter Any Word, Start Again");
  }else {
    bootbox.alert("You are the Winner..!!!");
    guess = [];
  }
}
