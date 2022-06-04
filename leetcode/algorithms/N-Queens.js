// Source : https://leetcode.com/problems/n-queens/
// Author : avebeatrix
// Date   : 2022-06-04
/**
 * @param {number} n
 * @return {string[][]}
 */

/* not good: see real backtracking https://leetcode.com/problems/n-queens/discuss/19840/Simple-JavaScript-solution-using-backtracking */
 var solveNQueens = function(n) {
     if (n === 1) return [['Q']];
    let queue = Array(n).fill(0).map((val, key) => [[0, key]]);
    let answer = [];
    let new_queue = [];
    while (queue.length) {
        
        let candidate = queue.pop();       
        let new_row = candidate[candidate.length - 1][0] + 1;
        
        for (let new_col = 0; new_col < n; new_col++) {           
           
            if (!candidate.some((val) => !(val[1] !== new_col && val[0] !== new_row && val[0] - val[1] !== new_row - new_col && val[0] + val[1] !== new_row + new_col))) {
                let new_candidate = [];
                candidate.forEach(val => {
                    new_candidate.push([val[0], val[1]]);
                })
                new_candidate.push([new_row, new_col]);
                if (new_candidate.length === n) {
                    answer.push(new_candidate.map((val) => {
                        let [x, y] = val;
                        return '.'.repeat(y) + 'Q' + '.'.repeat(n - y - 1);
                    }));
                } else {
                    new_queue.push(new_candidate);          
                }   
            }

        } 
        if (!queue.length){
            queue = new_queue;
            new_queue = [];
        }
    }
    return answer;
};