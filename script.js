// Declarations
let numberGame = "y";
let x = 0;
let word1 = 0;
let word2 = 0;
let word3 = 0;
let wrong = 0;
//Declarations

while (numberGame !== "n") {
  if (wrong >= 2 && wrong < 4) {
    alert("HINT NR. 1!! \nThe 3 words start with 'A', 'B' and 'O'");
  } else if (wrong >= 4 && wrong < 6) {
    alert(
      "HINT NR. 2!! \nOne is usually red, one is yellow and the third is orange"
    );
  } else if (wrong >= 6) {
    alert(
      + wrong +
        " TRIES! \nYou are bad at this...")
  }

  let guessWord = prompt(
    "Welcome to: 'FRUIT WORD GAME' \nThere are 3 correct words.\n\nGUESS:\n(one word at a time) "
  );
  while (guessWord === null || guessWord === "") {
    alert("You didn't enter anything, try again.");
    guessWord = prompt(
        "Welcome to: 'FRUIT WORD GAME' \nThere are 3 correct words.\n\nGUESS:\n(one word at a time)"
    );
  }
  guessWord = guessWord.toLowerCase();
  switch (guessWord) {
    case "apple":
      if (word1 !== 1) {
        alert("APPLE is CORRECT!");
        x++;
        word1 = 1;
      } else {
        alert("You already guessed this word");
      }
      break;
    case "banana":
      if (word2 !== 1) {
        alert("BANANA is CORRECT!");
        x++;
        word2 = 1;
      } else {
        alert("You already guessed this word");
      }
      break;
    case "orange":
      if (word3 !== 1) {
        alert("ORANGE is CORRECT!");
        x++;
        word3 = 1;
      } else {
        alert("You already guessed this word");
      }
      break;
    default:
      alert("Wrong word");
      wrong++;
      break;
  }
  if (x < 3) {
    numberGame = prompt(
      "YOU HAVE " +
        x +
        " POINTS. \n \nCLICK 'OK' to continue guessing \n ...or to exit type 'n' "
    );
  } else {
    alert("YOU GUESSED ALL THREE! CONGRATULATIONS!");
    numberGame = "n";
  }
}
alert("Thanks for playing. \nRefresh website to try again!");