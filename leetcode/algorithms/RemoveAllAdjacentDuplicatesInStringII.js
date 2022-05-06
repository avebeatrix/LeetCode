// Source : https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/
// Author : avebeatrix
// Date   : 2022-05-06
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
    let new_str = '';
    let pointer = 0;
    let counter = 1;
    let stack = [];
    let N = s.length;
    while (pointer < N) {
        new_str = new_str + s[pointer];
        if (s[pointer] === new_str[new_str.length - 2]) {
            counter++;
            if (counter === k) {
                new_str = new_str.slice(0, new_str.length - k);
                counter = stack.pop();
            }
        } else {
            stack.push(counter);
            counter = 1;
        }
        
        pointer++;
    }
    return new_str;
};