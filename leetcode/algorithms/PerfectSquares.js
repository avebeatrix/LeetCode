// Source : https://leetcode.com/problems/perfect-squares/
// Author : avebeatrix
// Date   : 2022-09-04
/**
 * @param {number} n
 * @return {number}
 */
 var numSquares = function(n) {
    let result = 1;
    let simple = [];
    let i = 1;
    while (i * i <= n) {
        simple.push(i * i);
        i++;
    }
    let set = new Set();
    let queue = [n];

    let new_queue = [];
    let is_found = false;
    while (!is_found) {      
        let item = queue.pop();
        simple.filter(s => s <= item).forEach(s => {
            if (is_found) return;
            let cur = item - s;
            if (!cur) {
                is_found = true;
            }
            if (!set.has(cur)) {
                set.add(cur);
                new_queue.push(cur);
            }
        })
        if (!is_found && !queue.length) {
            queue = new_queue;
            new_queue = [];
            result++;
        }
    }
    return result;
};
console.log(numSquares(13));
