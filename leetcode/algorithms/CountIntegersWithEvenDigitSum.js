// Source : https://leetcode.com/problems/count-integers-with-even-digit-sum/
// Author : avebeatrix
// Date   : 2022-02-20
/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
    let counter = 0;
    for (let i = 2; i <= num; i++) {       
        let sum = i.toString().split('').reduce((acc, val) => acc += Number(val), 0);
        if (sum % 2 === 0) {
            counter++;
        }
    }
    return counter;
};
console.log(countEven(4));