let playerBullets = 0;
let computerBullets = 0;
const shoot = document.querySelector("#shoot");
const reload = document.querySelector("#reload");
const block = document.querySelector("#block");

shoot.addEventListener("click", () => {
  let playerSelection = "shoot";
  let computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  console.log(playerSelection);
  console.log(computerSelection);
  console.log(result);
  console.log(playerBullets);
  console.log(computerBullets);
});

reload.addEventListener("click", () => {
  let playerSelection = "reload";
  let computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  console.log(playerSelection);
  console.log(computerSelection);
  console.log(result);
  console.log(playerBullets);
  console.log(computerBullets);
});

block.addEventListener("click", () => {
  let playerSelection = "block";
  let computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  console.log(playerSelection);
  console.log(computerSelection);
  console.log(result);
  console.log(playerBullets);
  console.log(computerBullets);
});

function computerPlay() {
  if (playerBullets <= 0) {
    return;
  } else if (computerBullets === 0) {
    let options = ["reload", "block"];
    return options[Math.floor(Math.random() * options.length)];
  } else {
    let options = ["shoot", "reload", "block"];
    return options[Math.floor(Math.random() * options.length)];
  }
}

function playRound(playerSelection, computerSelection) {
  let result;
  if (playerBullets <= 0) {
    result = "You have no bullets. You must reload";
  } else if (playerSelection === "reload" && computerSelection === "reload") {
    result = "";
    playerBullets++;
    computerBullets++;
  } else if (playerSelection === "reload" && computerSelection === "block") {
    result = "";
    playerBullets++;
  } else if (playerSelection === "block" && computerSelection === "relaod") {
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
    result = "You have no bullets";
  }
  return result;
}
