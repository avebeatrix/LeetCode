// Source : https://leetcode.com/problems/detect-capital/
// Author : avebeatrix
// Date   : 2022-01-24
/**
 * @param {string} word
 * @return {boolean}
 */
 var detectCapitalUse = function(word) {   
    if (word.toLowerCase() === word || word.toUpperCase() === word || word[0].toUpperCase() === word[0] && word.slice(1).toLowerCase() === word.slice(1)) return true;
    return false;
};