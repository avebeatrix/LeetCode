// Source : https://leetcode.com/problems/two-sum/
// Author : avebeatrix
// Date   : 2021-11-17

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let result = [];
    let subtrahendMap = new Map();
    nums.forEach((num, i) => {
        subtrahendMap.set(num - target, i);
    })
    for (let i = 0; i < nums.length; i++) {
        if (subtrahendMap.has(-nums[i]) && i !== subtrahendMap.get(-nums[i])) {
            result.push(i, subtrahendMap.get(-nums[i]));
            break;
        }
    }

    return result;
};

let ans = twoSum([3, 2, 4], 6);
console.log(ans);