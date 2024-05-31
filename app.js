let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let turn = document.querySelector("#playerName");
let turnO = true;
let count = 0;
let winningPatten = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === true) {
      box.innerText = "X";
      turnO = false;
      playerName.innerText = " Player 2 Turn";
    } else if (turnO === false) {
      box.innerText = "O";
      turnO = true;
      playerName.innerText = " Player 1 Turn";
    }
    box.disabled = true;
    checkWinner();
    count++;

    if (count === 9 && !checkWinner()) {
      console.log("no winner");
      playerName.innerText = " Match Draw";
      disableBtn();
    }
  });
});
function disableBtn() {
  for (let box of boxes) {
    
    box.disabled = true;
  }
}

const enableBtn = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    playerName.innerText = " Player 1 Turn";
  }

  count = 0;
};

const checkWinner = () => {
  for (let pattern of winningPatten) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        playerName.innerText = "winner is " + pos1Val;

        boxes[pattern[0]].style.color = "red";
        boxes[pattern[1]].style.color = "red";
        boxes[pattern[2]].style.color = "red";
        disableBtn();
      }
    }
  }
};

const resetGame = () => {
  let turnO = true;
  enableBtn();
};

resetbtn.addEventListener("click", resetGame);
