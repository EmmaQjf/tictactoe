// TASK1 define variables of players and winning combinations
const players = {
    "null": "",
    "1": "X",
    "-1": "O"
}

winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

//TASK2 define variables to track the game state
let board;
let turn;
let winner;

const gameStatus = document.querySelector("h1");
const button = document.querySelector("button")
// TASK3 9 squares 
const squares = document.querySelectorAll(".square");
const container = document.getElementById("container") //gameboard

container.addEventListener("click", handleClick
)
button.addEventListener("click", initialize);

// initialize the state variables
function initialize() {
    board = [null,null,null,
        null,null,null,
        null,null,null];
    turn = 1;
    winner = null;
}

// render those state variables to the page
function render() {
    squares.forEach(function(square,i) {
        square.innerHTML = players[board[i]];
        // const squareEl = document.querySelector(`#square${i}`);
        // squareEl.style.changeBackgroundColor = colors(square);
        // squareEl.setAttribute("id",i)
        })
    if(!winner) {
    gameStatus.innerHTML = `Player ${players[turn]}'s turn`;
    } else if (winner ==="T") {
    gameStatus.innerHTML = "It is a tie";
    }  else {
    gameStatus.innerHTML = `Congrats to ${players[winner]}`;
   }
}

//  for (let i =0; i< squares.length; i++) {
//     squares[i].innerHTML = players[board[i]];
//  }
//  const message = () => {
//     if (winner ==="T") {
//         gameStatus.innerHTML = "It is a tie";
//     } else if (winner) {
//         gameStatus.innerHTML = `Congrats to ${colors[winner].toupperCase()}`;
//     } else {
//         gameStatus.innerHTML = `It is ${colors[turn].toupperCase()}'s turn`;
//     }
//  }





function checkWinner() {
    // loop over the combination array and check each collection 
    // against the corresponding values inside of the gameboard array
    for (let wincombo of winningCombinations) {
        if (Math.abs(board[wincombo[0]] + board[wincombo[1]] + board[wincombo[2]]) === 3){return board[wincombo[0]];}}
    if (board.includes(null)) return null;
  return 'T';
  
    }

function handleClick(evt) {
   const i =evt.target.dataset.index;
   if(board[i]) return;
   board[i] = turn;
   turn *=-1;
   winner = checkWinner();
  render();
}