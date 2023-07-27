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
// max possible moves is 8
// min possible moves is 2
//ex [0,0] all possible moves [[2,1],[1,2],[-1,-2],[-2,-1],[-1,2],[1,-2],[2,-1],[-2,1]]
//we then have to filter all arrays that have a negative number
function knightMoves(currPosition, arr2 = [], board = []) {
  let possibleMoves = (arr1) => {
    let result = [];
    result.push([currPosition[0] + 2, currPosition[1] + 1]);
    result.push([currPosition[0] + 2, currPosition[1] - 1]);
    result.push([currPosition[0] - 2, currPosition[1] + 1]);
    result.push([currPosition[0] - 2, currPosition[1] - 1]);
    result.push([currPosition[0] + 1, currPosition[1] + 2]);
    result.push([currPosition[0] + 1, currPosition[1] - 2]);
    result.push([currPosition[0] - 1, currPosition[1] - 2]);
    result.push([currPosition[0] - 1, currPosition[1] + 2]);
    result = result.filter((arr) => {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) return false;
        if (arr[i] > 7) return;
      }
      return true;
    });
    return result;
  };

  return possibleMoves(currPosition);
}
