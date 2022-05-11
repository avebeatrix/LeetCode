// Source : https://leetcode.com/problems/count-sorted-vowel-strings/
// Author : avebeatrix
// Date   : 2022-05-11
/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
    let data = new Map();
    Array(5).fill(0).map((val, key) => {
        data.set(key + 1, []);
    })
    let count = (k, letter_pos) => {
        if (k === 1) {
            return letter_pos;
        }
        if (data.get(letter_pos)[k]) {
            return data.get(letter_pos)[k];
        }
        let res = 0;
        for (let i = letter_pos; i > 0; i--) {
            res += count(k - 1, i);
        }
        data.get(letter_pos)[k] = res;
        return res;
    }
    return count(n, 5);
};