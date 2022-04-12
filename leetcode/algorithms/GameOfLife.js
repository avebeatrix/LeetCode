// Source : https://leetcode.com/problems/game-of-life/
// Author : avebeatrix
// Date   : 2022-04-12
var gameOfLife = function(board) {    
    let getNeighborCount = (row, col, state) => {
        let count = 0;
        for (let i = row - 1; i <= row + 1; i++) {
            for (let j = col - 1; j <= col + 1; j++) {
                if (i === row && j === col) continue;
                if (state[i] && state[i][j] === 1) {
                    count++;
                }
            }
        }
        return count;
    }    
    let round = state => {
       
        let new_board = [];
        state.forEach((row, row_index) => {
            new_board.push([]);
            row.forEach((col, col_index) => {
                let neighbor_counter = getNeighborCount(row_index, col_index, state);
                new_board[row_index][col_index] = 0;

                if (state[row_index][col_index] === 1 && (neighbor_counter === 2 || neighbor_counter === 3)) {
                    new_board[row_index][col_index] = 1;
                } else if (state[row_index][col_index] === 0 && neighbor_counter === 3) {
                    new_board[row_index][col_index] = 1;
                }
            })
        })
       
        return new_board;
    }
    
    let new_board = round(board);    
    board.forEach((row, rowIndex) => {
        row.forEach((val, colIndex) => {
            board[rowIndex][colIndex] = new_board[rowIndex][colIndex];
        })
    })
}