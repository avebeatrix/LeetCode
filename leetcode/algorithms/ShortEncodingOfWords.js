// Source : https://leetcode.com/problems/short-encoding-of-words/
// Author : avebeatrix
// Date   : 2022-06-20
/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
    let set = new Set();
    let result = 0;
    words.sort((a, b) => {
        return a.length < b.length ? 1 : -1
    });
    console.log(words);
    words.forEach(word => {
        if (set.has(word)) {
            return


        }
        word.split('').forEach((val, i) => {
            let rest = word.slice(i, word.length);
            set.add(rest);
        })
        result += word.length + 1;
    });
    return result;
};