// Source : https://leetcode.com/problems/champagne-tower/
// Author : avebeatrix
// Date   : 2022-03-04
/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
/* to do: use less memory, half state */
 var champagneTower = function(poured, query_row, query_glass) {
    if (!poured) {
        return 0;
    }

    let state = [];

    for (let i = 0; i < 100; i++) {
        state[i] = Array(i + 1).fill(0);
    }
    state[0][0] = poured;
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < i + 1; j++) {
            if (state[i][j] > 1) {
                let half = (state[i][j] - 1) / 2;
                if (i < 99) {
                    state[i + 1][j] += half;
                    state[i + 1][j + 1] += half;
                }
                state[i][j] = 1;                            
            }
        }
    }

    return state[query_row][query_glass];
};