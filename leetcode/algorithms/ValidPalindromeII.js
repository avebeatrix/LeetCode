// Source : https://leetcode.com/problems/valid-palindrome-ii/
// Author : avebeatrix
// Date   : 2022-04-02
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let len = s.length;
    let half = Math.floor(len / 2);

    let removeCharAtIndex = (s, index) => s.slice(0, index) + s.slice(index + 1);
    let isPalindrome = (s) => {
        let halfNew = Math.floor(s.length / 2 + 1);
        return s.slice(0, halfNew - 1) === s.slice(s.length - halfNew + 1).split('').reverse().join('')
    }

    for (let i = 0; i < half; i++) {
        let l = i;
        let r = s.length - i - 1;
        if (s[l] === s[r]) continue;

        let slicedL = removeCharAtIndex(s, l);
        let slicedR =  removeCharAtIndex(s, r);      

        return isPalindrome(slicedL) || isPalindrome(slicedR);        
    }
    return true;
};