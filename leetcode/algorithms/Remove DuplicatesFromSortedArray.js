// Source : https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Author : avebeatrix
// Date   : 2021-11-22

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let k = nums.length === 0 ? -1 : 0;
    for (let i=1; i < nums.length; i++) {
        if (nums[i] > nums[k]){
            k++;
            nums[k] = nums[i];            
        }        
    }
    return ++k;
};

let k = removeDuplicates([1,1,2]); // Calls your implementation

let t;