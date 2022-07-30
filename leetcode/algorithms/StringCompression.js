// Source : https://leetcode.com/problems/string-compression/
// Author : avebeatrix
// Date   : 2022-07-30
/**
 * @param {character[]} chars
 * @return {number}
 */
 var compress = function(chars) {
    let counter = 1;
    let result = [];
    let curChar = chars[0];
    let L = chars.length;
    if (L === 1) {
        return 1;
    }
    let pushChars = () => {
        if (counter === 1) {
            result.push(curChar);
        } else {
            result.push(curChar, ...(`${counter}`.split('')));
        }
    }
    for (let i = 1; i < L; i++) {
        if (chars[i] === curChar) {
            counter++;
        } else {
            pushChars();
            curChar = chars[i];
            counter = 1;    
        }
    }
    pushChars();
    result.forEach((val, i) => {
        chars[i] = `${val}`;
    })
    
    chars = result;
    return result.length;
};