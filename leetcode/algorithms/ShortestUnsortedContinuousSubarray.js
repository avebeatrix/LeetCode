// Source : https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
// Author : avebeatrix
// Date   : 2022-05-03
// T: O(N))
// S: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
    let result = 0;
    let lp = -1;
    let rp = 0;
    let cp = 0;
    let max = nums[0] || -Infinity;
    let minp = 0;
    let maxp = 0;
    let N = nums.length;
    while (cp < N) {
        if (nums[cp] < max) {
            if (!~lp || nums[minp] > nums[cp]) {
                lp = maxp;               
                while (nums[lp] > nums[cp] && lp) {
                    lp--;
                } 
                if (nums[lp] <= nums[cp] && lp < cp){
                    lp++;
                }   
                minp = cp;          
            }        
            rp = cp;            
        } else {
            max = nums[cp];
            maxp = cp;
        }
        cp++;
    }
    if (~lp) {
        result = rp - lp + 1;
    }
    return result;
};