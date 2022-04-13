// Source : https://leetcode.com/problems/spiral-matrix-ii/
// Author : avebeatrix
// Date   : 2022-04-13
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
   
    let arr = Array(n).fill(0).map(val => Array(n).fill(0));
    let x = 0;
    let y = 0;
    const [LEFT, RIGHT, UP, DOWN] = [1, 2, 3, 4];
    let direction = RIGHT;
    for (let i = 1; i <= n**2; i++) {
        arr[y][x] = i;
        switch (direction) {
            case RIGHT:
                if (x + 1 < n && !arr[y]?.[x + 1]) {
                    x++;
                } else {
                    direction = DOWN;
                    y++;
                }
                break;
            case LEFT:
                if (x - 1 > -1 && !arr[y]?.[x - 1]) {
                    x--;
                } else {
                    direction = UP;
                    y--;
                }
                break;
            case UP:
                if (y - 1 > -1 && !arr[y - 1]?.[x]) {
                    y--;
                } else {
                    direction = RIGHT;
                    x++;
                }
                break;
            case DOWN:
                if (y + 1 < n && !arr[y + 1]?.[x]) {
                    y++;
                } else {
                    direction = LEFT;
                    x--;
                }
                break;
            default:
                break;
        }
    }
    return arr;
};
generateMatrix(3);