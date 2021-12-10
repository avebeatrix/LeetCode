// Source : https://leetcode.com/problems/majority-element/
// Author : avebeatrix
// Date   : 2021-12-11
/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let count = 0;
    let result = null;
    nums.forEach(num => {
        if (count === 0){
            result = num;
        }
        count += num === result ? 1 : -1;
    })
    return result;
};