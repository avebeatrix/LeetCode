// Source : https://leetcode.com/problems/construct-string-with-repeat-limit/
// Author : avebeatrix
// Date   : 2022-02-20
/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function (s, repeatLimit) {
    let map = new Map();
    let set = new Set();
    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
        set.add(char);
    }
    let arr = [...set];
    arr.sort((a, b) => (a > b ? -1 : 1));
    let arr_length = arr.length;
    let result = '';
    let has_rests = false;
    do {
        has_rests = false;
        for (let i = 0; i < arr_length; i++) {
            let repeat_counter = repeatLimit;
            let char = arr[i];
            let rest_of_chars = map.get(char);
            if (!rest_of_chars || result.substring(result.length - repeatLimit) === char.repeat(repeatLimit)) {
                continue;
            }
            while (repeat_counter) {
                rest_of_chars = map.get(char);
                if (!rest_of_chars) {
                    break;
                }
                result += char;
                map.set(char, rest_of_chars - 1);
                repeat_counter--;
            }
            if (map.get(char) > 0) {
                for (let j = i + 1; j < arr_length; j++) {
                    char = arr[j];
                    rest_of_chars = map.get(char);
                    if (!rest_of_chars || result.substring(result.length - repeatLimit) === char.repeat(repeatLimit)) {
                        continue;
                    }
                    has_rests = true;
                    result += char;
                    map.set(char, rest_of_chars - 1);
                    break;
                }
                i--;
            }
        }
    } while (has_rests);

    return result;
};
console.log(repeatLimitedString(s = "aababab", repeatLimit = 2));