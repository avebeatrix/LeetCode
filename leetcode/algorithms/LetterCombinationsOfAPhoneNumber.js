// Source : https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// Author : avebeatrix
// Date   : 2021-12-08

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let result = [];
    if (digits === '') {
        return result;
    }
    let map = new Map();
    map.set('2', ['a', 'b', 'c']);
    map.set('3', ['d', 'e', 'f']);
    map.set('4', ['g', 'h', 'i']);
    map.set('5', ['j', 'k', 'l']);
    map.set('6', ['m', 'n', 'o']);
    map.set('7', ['p', 'q', 'r', 's']);
    map.set('8', ['t', 'u', 'v']);
    map.set('9', ['w', 'x', 'y', 'z']);

    let pointer = 0;

    for (let digit of digits) {
        map.get(digit).forEach(val => {
            if (!pointer) {
                result.push(val);
            } else {
                for (let i = 0; i < pointer; i++) {
                    result.push(result[i] + val)
                }
            }
        })
        result.splice(0, pointer);
        pointer = (pointer || 1) * map.get(digit).length;
    }

    return result;
};