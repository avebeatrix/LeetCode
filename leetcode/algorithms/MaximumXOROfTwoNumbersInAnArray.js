// Source : https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/
// Author : avebeatrix
// Date   : 2022-01-27
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
    let max = 0;
   
    let prefixes_set = new Set();
    nums.forEach(num => {
        let num2 = num.toString(2);
        num2 = num2.padStart(32, "0");
        let prefix = '';
        for(let i = 0; i < 32; i++) {
            prefix += num2[i];
            prefixes_set.add(prefix, true);          
        }  
    })
    nums.forEach(num => {
        let num2 = num.toString(2);
        num2 = num2.padStart(32, "0");
        let prefix = '';
        for(let i = 0; i < 32; i++) {
            let key = num2[i] === "0" ? '1' : '0';
            if (prefixes_set.has(prefix+key)){
                prefix += key;
            } else {
                prefix += num2[i];
            }
        }
        max = Math.max(max, (num ^ parseInt(prefix, 2)));        
    })
   
    return max;
};