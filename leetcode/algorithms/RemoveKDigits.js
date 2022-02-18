// Source : https://leetcode.com/problems/remove-k-digits/
// Author : avebeatrix
// Date   : 2022-02-18
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
 var removeKdigits = function(num, k) {
    if (k === num.length) return '0';
    let counter = 0;
    let index = 1;
    let str = num;
    while (counter !== k) {
        if (Number(str[index]) < Number(str[index - 1])) {
            str = str.slice(0, index - 1) + str.slice(index);
            counter++;
            index--;
        } else {
            index++;
            if (index > str.length - 1) {
                break;
            }
        }        
    }
    while (counter !== k) {
        let arr = str.split('').map(val => Number(val));
        let max = Math.max(...arr);
        let index = str.indexOf(max);
        str = str.slice(0, index) + str.slice(index + 1);
        counter++;
    }
    return BigInt(str).toString();
};