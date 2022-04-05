let playerBullets = 0;
let computerBullets = 0;
const shoot = document.querySelector("#shoot");
const reload = document.querySelector("#reload");
const block = document.querySelector("#block");

shoot.addEventListener("click", function () {
  console.log("shoot");
});

function computerPlay() {
  if (computerBullets === 0) {
    let options = ["reload", "block"];
    return options[Math.floor(Math.random() * options.length)];
  } else {
    let options = ["shoot", "reload", "block"];
    return options[Math.floor(Math.random() * options.length)];
  }
}
