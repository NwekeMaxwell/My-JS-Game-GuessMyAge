"Use Strict";

// let secretNumber = Math.trunc(Math.random() * 35) + 1;
let secretNumber = Math.floor(Math.random() * (35 - 18 + 1) + 18);

//display message function
const displayMessage = function (message) {
  document.querySelector(".info").textContent = message;
};
//score initial variables
let score = 35;
let highscore = 0;

//function of all in-game actions
const gameActions = function () {
  const input = Number(document.querySelector(".input").value);
  console.log(input, typeof input);
  if (!input) {
    //no input
    displayMessage("⛔No Number");
  } else if (input === secretNumber) {
    //correct input
    displayMessage("🥳That's my age🎉");
    document.querySelector(".container").style.backgroundColor = "green";
    document.querySelector(".output").textContent = secretNumber;
    document.querySelector(".gif").src = `../img/dancing.gif`;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (input !== secretNumber && input >= 18 && input <= 35) {
    //wrong input
    if (score > 1) {
      displayMessage(
        input > secretNumber
          ? "📈 Too old for me, try again"
          : "📉 Too young for me, try again"
      );
      score -= 2;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      displayMessage("🚩GAME OVER🚩");
    }
  } else {
    //lesser than range
    if (score > 1) {
      displayMessage(
        input < 18 ? "🔻I can't be that young" : "🔻I can't be that Old"
      );
      score -= 2;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      displayMessage("🚩GAME OVER🚩");
    }
  }
};
//calling the game actions at the click of the guess button
document.querySelector(".guess").addEventListener("click", function () {
  gameActions();
});
//calling the game actions at the click of the Keyboard-Enter key
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    gameActions();
  }
});

//function of the Reset / play again button
const playAgain = function () {
  score = 35;
  secretNumber = Math.floor(Math.random() * (35 - 18 + 1) + 18);
  displayMessage("Start Guessing...");
  document.querySelector(".container").style.backgroundColor = "#000";
  document.querySelector(".output").textContent = "?";
  document.querySelector(".input").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector(".gif").src = `../img/walking.gif`;
};

//calling the reset / play again function at the click of the button
document.querySelector(".again").addEventListener("click", function () {
  playAgain();
});
//calling the reset / play again function at the click of Keyboard-ESC key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    playAgain();
  }
});
