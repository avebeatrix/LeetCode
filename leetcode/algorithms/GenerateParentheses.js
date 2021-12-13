// Source : https://leetcode.com/problems/generate-parentheses/
// Author : avebeatrix
// Date   : 2021-12-13
/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    let result = [['(', 1, 0]];
    for(let i = 0; i < 2 * n ; i++) {
        result.forEach((val, index) => {
            let can_add_open = false;
            let base = [result[index][0], result[index][1], result[index][2]];
            if (base[1] < n) {
                result[index][0] += '(';
                result[index][1]++;
                can_add_open = true;
            }
            if (base[1] - base[2] > 0 && base[2] < n) {
                base[0] += ')';
                base[2]++;
                if (!can_add_open) {
                    result[index] = base;
                }else{
                    result.push(base);
                }                                
            }
        })
    }
    return result.map(val => val[0]);
};
