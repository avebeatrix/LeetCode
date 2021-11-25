// Source : https://leetcode.com/problems/first-unique-character-in-a-string/
// Author : avebeatrix
// Date   : 2021-11-25
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let mapS = new Map();
    s.split('').forEach((char, index) => {
        if (!mapS.has(char)) {
            mapS.set(char, index);
        } else {
            mapS.set(char, -1);
        }
    })
    let len = s.length;
    for (let i = 0; i < len; i++) {
        if (mapS.get(s[i]) !== -1) {
            return i;
        }
    }
    return -1;
};