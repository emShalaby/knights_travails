const content = document.querySelector("#content");
const boardElement = document.createElement("div");

let board = new Array(8);
console.log(board);
for (let i = 0; i < 8; i++) {
  board[i] = new Array(8);
  for (let j = 0; j < 8; j++) {
    board[i][j] = "";
  }
}
