let playerBullets = 0;
let computerBullets = 0;
const shoot = document.querySelector("#shoot");
const reload = document.querySelector("#reload");
const block = document.querySelector("#block");

shoot.addEventListener("click", () => {
  let playerSelection = "shoot";
  let computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  console.log("Player Selection: " + playerSelection);
  console.log("Computer Selection: " + computerSelection);
  console.log(result);
  console.log(playerBullets);
  console.log(computerBullets);
});

reload.addEventListener("click", () => {
  let playerSelection = "reload";
  let computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  console.log("Player Selection: " + playerSelection);
  console.log("Computer Selection: " + computerSelection);
  console.log(result);
  console.log(playerBullets);
  console.log(computerBullets);
});

block.addEventListener("click", () => {
  let playerSelection = "block";
  let computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  console.log("Player Selection: " + playerSelection);
  console.log("Computer Selection: " + computerSelection);
  console.log(result);
  console.log(playerBullets);
  console.log(computerBullets);
});

function playRound(playerSelection, computerSelection) {
  let result;
  if (playerBullets === 6 && playerSelection === "reload") {
    result = "Your gun is full, you must shoot or block.";
  } else if (playerBullets <= 0 && playerSelection === "shoot") {
    result = "You have no bullets. You must reload";
  } else if (playerSelection === "block" && computerSelection === "block") {
    result = "";
  } else if (playerSelection === "reload" && computerSelection === "reload") {
    result = "";
    computerBullets++;
    playerBullets++;
  } else if (playerSelection === "reload" && computerSelection === "block") {
    result = "";
    playerBullets++;
  } else if (playerSelection === "block" && computerBullets === 0) {
    result =
      "You have no bullets, and neither have they. You should probably reload.";
  } else if (playerSelection === "shoot" && computerSelection === "shoot") {
    result = "Your shots cancel each other out";
    playerBullets--;
    computerBullets--;
  } else if (playerSelection === "shoot" && computerSelection === "block") {
    result = "They blocked your shot!";
    playerBullets--;
  } else if (playerSelection === "shoot" && computerSelection === "reload") {
    result = "You win!";
    playerBullets = 0;
    computerBullets = 0;
  } else if (playerSelection === "block" && computerSelection === "shoot") {
    result = "You blocked their shot!";
    computerBullets--;
  } else if (playerSelection === "reload" && computerSelection === "shoot") {
    result = "You lose!";
    playerBullets = 0;
    computerBullets = 0;
  } else {
    return;
  }
  return result;
}

function computerPlay() {
  if (computerBullets === 6) {
    let options = ["shoot", "block"];
    return options[Math.floor(Math.random() * options.length)];
  } else if (computerBullets === 0 && playerBullets === 0) {
    return "reload";
  } else if (computerBullets > 0 && playerBullets === 0) {
    let options = ["shoot", "reload"];
    return options[Math.floor(Math.random() * options.length)];
  } else if (computerBullets === 0 && playerBullets > 0) {
    let options = ["reload", "block"];
    return options[Math.floor(Math.random() * options.length)];
  } else if (computerBullets >= 1 && playerBullets >= 1) {
    let options = ["shoot", "reload", "block"];
    return options[Math.floor(Math.random() * options.length)];
  }
}

function checkWinner() {
  if (result === "You win!") {
    winner =
      "Congratulations, you won. Choose your next move to restart the game!";
    playerScore = 0;
    computerScore = 0;
  } else if (result === "You lose!") {
    winner = "Unlucky, you lost. Choose your next move to restart the game!";
    playerScore = 0;
    computerScore = 0;
  }
  document.querySelector("#checkWinner").innerHTML = winner;
}

function reset() {
  if (playerScore === 0 || computerScore === 0) {
    winner = "";
  }
  document.querySelector("#checkWinner").innerHTML = winner;
}
