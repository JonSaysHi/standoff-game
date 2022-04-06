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
  playerBullets++;
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

function computerPlay() {
  if (playerBullets === 0 && computerBullets === 0) {
    let options = "reload";
    return options;
  } else if (playerBullets === 0 && computerBullets > 0) {
    let options = ["shoot", "reload"];
    return options[Math.floor(Math.random() * options.length)];
  } else if (computerBullets === 0) {
    let options = ["reload", "block"];
    return options[Math.floor(Math.random() * options.length)];
  } else if (playerBullets >= 0 && computerBullets > 0) {
    let options = ["shoot", "reload", "block"];
    return options[Math.floor(Math.random() * options.length)];
  }
}

function playRound(playerSelection, computerSelection) {
  let result;
  if (playerBullets <= 0 && playerSelection === "shoot") {
    result = "You have no bullets. You must reload";
  } else if (playerSelection === "reload" && computerSelection === "reload") {
    result = "";
    computerBullets++;
  } else if (playerSelection === "reload" && computerSelection === "block") {
    result = "";
  } else if (playerSelection === "block" && computerSelection === "reload") {
    result = "";
    computerBullets++;
  } else if (playerSelection === "shoot" && computerSelection === "shoot") {
    result = "Your shots cancel each other out";
    playerBullets--;
    computerBullets--;
  } else if (playerSelection === "shoot" && computerSelection === "block") {
    result = "They blocked your shot!";
    playerBullets--;
  } else if (playerSelection === "shoot" && computerSelection === "reload") {
    result = "You win!";
    playerBullets--;
  } else if (playerSelection === "block" && computerSelection === "shoot") {
    result = "You blocked their shot!";
    computerBullets--;
  } else if (playerSelection === "reload" && computerSelection === "shoot") {
    result = "You lose!";
    computerBullets--;
  } else {
    return;
  }
  return result;
}
