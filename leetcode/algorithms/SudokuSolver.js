// Source : https://leetcode.com/problems/sudoku-solver/
// Author : avebeatrix
// Date   : 2022-04-05
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
/* todo: make faster, too slow */
 var solveSudoku = function(board) {
    //return the solved puzzle as a 2d array of 9 x 9    
    let check = (solution) => {
        let checkSmallSquare = (offsetX, offsetY) => {
            let set = new Set();
            for (let i = offsetX; i < offsetX + 3; i++) {
                for (let j = offsetY; j < offsetY + 3; j++) {
                    if (solution[i][j]) {
                        if (set.has(solution[i][j])) {
                            return false;
                        }
                        set.add(solution[i][j]);
                    }
                }
            }
            return true;
        }
        let cols = Array(9).fill(0).map(val => new Set());
        for (let i = 0; i < 9; i++) {
            let set = new Set();
            for (let j = 0; j < 9; j++) {
                if (solution[i][j]) {
                    if (set.has(solution[i][j])) {
                        return false;
                    }
                    set.add(solution[i][j]);
                    if (cols[j].has(solution[i][j])) {
                        return false;
                    }
                    cols[j].add(solution[i][j]);
                }
            }
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (!checkSmallSquare(i * 3, j * 3)) return false;
            }
        }

        return true;
    }

    let solution = Array(9).fill(0).map((val, i) => Array.from(board[i]).map(val => val === '.' ? 0 : parseInt(val)));
    let queue = [solution];
    let tmpQ = [];
    while (queue) {
        let cur = queue.pop();

        let hasEmpty = false;
        loop1:
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (!cur[i][j]) {
                    hasEmpty = true;
                    for (let k = 1; k <= 9; k++) {
                        cur[i][j] = k;
                        if (check(cur)) {
                            tmpQ.push(Array(9).fill(0).map((val, i) => Array.from(cur[i])));
                        }
                    }
                    break loop1;
                }
            }
        }
        if (!hasEmpty){ 
            for(let i = 0;i < 9; i++) {
                for(let j = 0;j < 9; j++) {
                    board[i][j] = cur[i][j].toString();
                }
            }     
            return;
        }
        if (!queue.length) {
            queue = tmpQ;
            tmpQ = [];
        }
    }
};