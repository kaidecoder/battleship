let gameBoard = document.querySelector(".game-board");
gameBoard.classList.add("grid");
let randomNumber = Math.floor(Math.random() * 49) + 1;
console.log(randomNumber);
let el;
let guess = document.querySelector(".guess");
let randomNum = document.querySelector(".random-number");
let btn = document.querySelector(".btn");
let img = document.querySelector("img");

function createEl(type, content, cls) {
  el = document.createElement(type);
  el.style.border = "1px solid red";
  el.style.backgroundColor = "black";
  el.innerText = content;
  el.classList.add(cls);
  gameBoard.append(el);
}

function createShip() {
  for (let i = 1; i <= 49; i++) {
    createEl("div", `${i}`, "box");

    if (i === randomNumber) {
      let img = document.createElement("img");
      img.src = "/ship.png";
      img.classList.add("battleship");
      el.append(img);
    }
  }
}
const ship = createShip();
console.log(ship);
function guessLocation() {
  let guessShipLocation = Number(
    prompt("Where is the battleship? Guess a number between 1 and 49:  ")
  );
  guess.innerText = guessShipLocation;
  randomNum.innerText = randomNumber;
  guessShipLocation === randomNumber
    ? ((guess.innerText += " You sunk my battleship"),
      (img.style.display = "inline-block"))
    : "Try again";
}

btn.addEventListener("click", guessLocation);

//PROBLEM:  The img created is not in one of the divs!!!!!! Fixed!!
//PROBLEM:  The random image is visible on the screen before I guess
