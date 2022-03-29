// Source : https://leetcode.com/problems/find-the-duplicate-number/
// Author : avebeatrix
// Date   : 2022-03-29
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
    // Find the intersection point of the two runners.
    let tortoise = nums[0];
    let hare = nums[0];
    
    do {
        tortoise = nums[tortoise];
        hare = nums[nums[hare]];
    } while (tortoise != hare);

    // Find the "entrance" to the cycle.
    tortoise = nums[0];
    
    while (tortoise != hare) {
        tortoise = nums[tortoise];
        hare = nums[hare];
    }

    return hare;
};
console.log(findDuplicate([2,2,2,2,2]));