let playerBullets = 0;
let computerBullets = 0;
const shoot = document.querySelector("#shoot");
const reload = document.querySelector("#reload");
const block = document.querySelector("#block");

shoot.addEventListener("click", () => {
  if (playerBullets > 0) {
    let playerSelection = "Shoot";
    let computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    document.querySelector("#p-move").textContent = playerSelection;
    document.querySelector("#c-move").textContent = computerSelection;
    document.querySelector("#result").textContent = result;
    document.querySelector("#p-score").textContent = playerBullets;
    document.querySelector("#c-score").textContent = computerBullets;
    shootSound();
  } else if (playerBullets === 0) {
    let playerSelection = "Empty";
    let computerSelection = " - ";
    let result = "You have no bullets. You must reload.";
    document.querySelector("#p-move").textContent = playerSelection;
    document.querySelector("#c-move").textContent = computerSelection;
    document.querySelector("#result").textContent = result;
    document.querySelector("#p-score").textContent = playerBullets;
    document.querySelector("#c-score").textContent = computerBullets;
    emptySound();
  }
});

reload.addEventListener("click", () => {
  let playerSelection = "Reload";
  let computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  document.querySelector("#p-move").textContent = playerSelection;
  document.querySelector("#c-move").textContent = computerSelection;
  document.querySelector("#result").textContent = result;
  document.querySelector("#p-score").textContent = playerBullets;
  document.querySelector("#c-score").textContent = computerBullets;
  reloadSound();
});

block.addEventListener("click", () => {
  let playerSelection = "Block";
  let computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  document.querySelector("#p-move").textContent = playerSelection;
  document.querySelector("#c-move").textContent = computerSelection;
  document.querySelector("#result").textContent = result;
  document.querySelector("#p-score").textContent = playerBullets;
  document.querySelector("#c-score").textContent = computerBullets;
  blockSound();
});

function playRound(playerSelection, computerSelection) {
  let result;
  if (playerBullets === 6 && playerSelection === "Reload") {
    result = "Your gun is full, you must shoot or block.";
    //   } else if (playerBullets <= 0 && playerSelection === "Shoot") {
    //     result = "You have no bullets. You must reload.";
  } else if (playerSelection === "Block" && computerSelection === "Block") {
    result = "";
  } else if (playerSelection === "Reload" && computerSelection === "Reload") {
    result = "";
    computerBullets++;
    playerBullets++;
  } else if (playerSelection === "Reload" && computerSelection === "Block") {
    result = "";
    playerBullets++;
  } else if (playerSelection === "Block" && computerBullets === 0) {
    result = "You should reload. Neither of you have bullets.";
  } else if (playerSelection === "Shoot" && computerSelection === "Shoot") {
    result = "Your shots cancel each other out.";
    playerBullets--;
    computerBullets--;
    ricochetSound();
  } else if (playerSelection === "Shoot" && computerSelection === "Block") {
    result = "They blocked your shot!";
    playerBullets--;
    ricochetSound();
  } else if (playerSelection === "Shoot" && computerSelection === "Reload") {
    result = "You win!";
    playerBullets = 0;
    computerBullets = 0;
    setTimeout(victorySound, 500);
  } else if (playerSelection === "Block" && computerSelection === "Shoot") {
    result = "You blocked their shot!";
    ricochetSound();
    computerBullets--;
  } else if (playerSelection === "Reload" && computerSelection === "Shoot") {
    result = "You lose!";
    playerBullets = 0;
    computerBullets = 0;
    shootSound();
    setTimeout(lossSound, 500);
  } else {
    return;
  }
  return result;
}

function computerPlay() {
  if (computerBullets === 6) {
    let options = ["Shoot", "Block"];
    return options[Math.floor(Math.random() * options.length)];
  } else if (computerBullets === 0 && playerBullets === 0) {
    return "Reload";
  } else if (computerBullets > 0 && playerBullets === 0) {
    let options = ["Shoot", "Reload"];
    return options[Math.floor(Math.random() * options.length)];
  } else if (computerBullets === 0 && playerBullets > 0) {
    let options = ["Reload", "Block"];
    return options[Math.floor(Math.random() * options.length)];
  } else if (computerBullets >= 1 && playerBullets >= 1) {
    let options = ["Shoot", "Reload", "Block"];
    return options[Math.floor(Math.random() * options.length)];
  }
}

function shootSound() {
  let audio = new Audio("sounds/Shoot.mp3");
  audio.play();
}

function reloadSound() {
  let audio = new Audio("sounds/Reload.wav");
  audio.play();
}

function ricochetSound() {
  let audio = new Audio("sounds/Ricochet.wav");
  audio.play();
}

function emptySound() {
  let audio = new Audio("sounds/Empty.wav");
  audio.play();
}

function blockSound() {
  let audio = new Audio("sounds/Block.mp3");
  audio.play();
}

function victorySound() {
  let audio = new Audio("sounds/Victory.mp3");
  audio.play();
}

function lossSound() {
  let audio = new Audio("sounds/Loss.mp3");
  audio.play();
}
