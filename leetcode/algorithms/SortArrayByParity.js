// Source : https://leetcode.com/problems/sort-array-by-parity/
// Author : avebeatrix
// Date   : 2022-05-02
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
    let p_odd = 0;
    let p_even = 0;
    loop:
    while (p_odd < nums.length) {
        while (nums[p_odd] % 2 !== 0) {
            p_odd++;
            if (p_odd === nums.length){
                break loop;
            }
        }
        while (nums[p_even] % 2 === 0) {
            p_even++;
            if (p_even === nums.length){
                break loop;
            }
        }
        if (p_odd > p_even) {
            let tmp = nums[p_odd];
            nums[p_odd] = nums[p_even];
            nums[p_even] = tmp;
        }
        p_odd++;        
    }
    return nums;
};