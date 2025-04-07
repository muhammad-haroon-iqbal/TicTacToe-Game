console.log("Welcome to Tic Tac Toe");
let winningMusic = new Audio("winning.wav");
let turnMusic = new Audio("turn.wav");
let turn = "X";
let isgameover = false;

//Function to change the trun
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

//Function to check if there's a winner
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxes[e[0]].innerText + " Won";
      winningMusic.play();
      Array.from(boxes).forEach((element) => {
        // element.style.pointerEvents = "none";
        isgameover = true;
        document
          .querySelector(".imgbox")
          .getElementsByTagName("img")[0].style.width = "200px";
      });
    }
  });
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turnMusic.play();
      turn = changeTurn();
      checkWin();
      if (!isgameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

// Reset button functionality
reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
    // element.style.pointerEvents = "auto";
  });
  turn = "X";
  isgameover = false;
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
    "0px";
});
