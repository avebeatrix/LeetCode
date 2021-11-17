// Source : https://leetcode.com/problems/palindrome-number/
// Author : avebeatrix
// Date   : 2021-11-17

var isPalindrome = function (x) {
    if (x < 0) return false;
    let arr = [];
    let curr = 0;
    let i = 0;

    while (curr !== x) {
        let elem = (x % (1 * 10 ** (i + 1)) - curr) / (1 * 10 ** i);
        arr.push(elem);
        curr = x % (1 * 10 ** (i + 1));
        i++;
    }
    let L = arr.length;
    let middle = Math.floor(arr.length / 2) + 1;
    for (let i = 0; i < middle; i++) {
        if (arr[i] !== arr[L - i - 1]) return false;
    }
    return true;
};
