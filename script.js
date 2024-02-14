// Declarations
let exitWord = "";
let correctAnswer = 0;
let word1 = 0;
let word2 = 0;
let word3 = 0;
let wrong = 0;
//Declarations

while (exitWord !== "x") {
  if (wrong >= 3 && wrong < 5) {
    alert("HINT NR. 1!! \nThe 3 words start with 'A', 'B' and 'O'");
  } else if (wrong >= 5 && wrong < 8) {
    alert(
      "HINT NR. 2!! \nOne is usually red, one is yellow and the third is orange"
    );
  } else if (wrong >= 8) {
    alert(
      + wrong +
        " TRIES! \nYou are bad at this...")
  }

  let guessWord = prompt(
    "Welcome to: 'FRUIT WORD GAME' \n(To exit write: 'x' and press OK/Enter)\n\nThere are 3 correct words.\n\nGUESS:\n(one word at a time) "
  );
  while (guessWord === null || guessWord === "" ) {
    alert("You didn't enter anything, try again.");
    guessWord = prompt(
      "Welcome to: 'FRUIT WORD GAME' \n(To exit write: 'x' and press OK/Enter)\n\nThere are 3 correct words.\n\nGUESS:\n(one word at a time) "
    );
  }
  guessWord = guessWord.toLowerCase();
  switch (guessWord) {
    case "apple":
      if (word1 !== 1) {
        alert("APPLE is CORRECT!");
        correctAnswer++;
        word1 = 1;
      } else {
        alert("You already guessed this word");
      }
      break;
    case "banana":
      if (word2 !== 1) {
        alert("BANANA is CORRECT!");
        correctAnswer++;
        word2 = 1;
      } else {
        alert("You already guessed this word");
      }
      break;
    case "orange":
      if (word3 !== 1) {
        alert("ORANGE is CORRECT!");
        correctAnswer++;
        word3 = 1;
      } else {
        alert("You already guessed this word");
      }
      break;
    case "x":
      exitWord = "x";
      alert("Ok. Sorry to see you go...");
      break;
    default:
      alert("Wrong word");
      wrong++;
      break;
  }
  if (correctAnswer < 3 && correctAnswer > 0 && exitWord !== "x") {
    alert("YOU HAVE " + correctAnswer + " points!");
  } else if (exitWord === "x"){
    alert("Goodbye and welcome back");
  } else if (correctAnswer === 3){
    alert("YOU GUESSED ALL THREE! CONGRATULATIONS!");
    exitWord = "x";
  }
}
alert("Thanks for playing. \nRefresh website to try again!");