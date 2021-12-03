// Source : https://leetcode.com/problems/valid-sudoku/
// Author : avebeatrix
// Date   : 2021-12-03
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

    let set = new Set();
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {

            if (+board[i][j] > 0) {
                if (set.has(board[i][j])) {
                    return false;
                } else {
                    set.add(board[i][j]);
                }
            }
        }
        set.clear();
    }
    set.clear();
    for (let j = 0; j < 9; j++) {
        set = new Set();
        for (let i = 0; i < 9; i++) {

            if (+board[i][j] > 0) {
                if (set.has(board[i][j])) {
                    return false;
                } else {
                    set.add(board[i][j]);
                }
            }
        }
        set.clear();
    }
    set.clear();

    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            set = new Set();
            for (let l = i; l < i + 3; l++) {
                for (let m = j; m < j + 3; m++) {
                    if (+board[l][m] > 0) {
                        if (set.has(board[l][m])) {
                            return false;
                        } else {
                            set.add(board[l][m]);
                        }
                    }
                }
            }
            set.clear();
        }

    }


    return true;
};

let d = isValidSudoku([[".", ".", ".", ".", "5", ".", ".", "1", "."], [".", "4", ".", "3", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", "3", ".", ".", "1"], ["8", ".", ".", ".", ".", ".", ".", "2", "."], [".", ".", "2", ".", "7", ".", ".", ".", "."], [".", "1", "5", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", "2", ".", ".", "."], [".", "2", ".", "9", ".", ".", ".", ".", "."], [".", ".", "4", ".", ".", ".", ".", ".", "."]]);

let k;