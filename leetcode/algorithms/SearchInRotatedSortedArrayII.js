// Source : https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
// Author : avebeatrix
// Date   : 2022-03-28
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
 var search = function(nums, target) {
    let checkPivot = (l, r) => {
        if (nums[l] > nums[r]) {
            return true;
        }
        return false;
    }
    let findTarget = (l, r, m) => {
        if (nums[m] >= target) {
            return false;
        }
        return true;
    }  
    let binarySearchL = (l, r, check) => {
        while (l < r) {           

            let m = Math.floor((l + r) / 2);
            
            if (check(l, r, m)) {
                l = m + 1;                
            } else {
                r = m;
            }
        }                   
        return l;
    }   

    while (nums.length > 1 && nums[0] === nums[nums.length - 1]) {
        nums.pop();
    }

    let start = binarySearchL(0, nums.length - 1, checkPivot);   
    while (start && nums[start] >= nums[start-1]){
        start--;
    }

    let index = target >= nums[0] ?  binarySearchL(0, start || nums.length - 1, findTarget) : binarySearchL(start, nums.length - 1, findTarget);
    if(nums[index] === target) return true;
    return false;
};