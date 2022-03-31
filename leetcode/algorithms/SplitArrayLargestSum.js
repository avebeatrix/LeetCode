// Source : https://leetcode.com/problems/split-array-largest-sum/
// Author : avebeatrix
// Date   : 2022-03-31
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
    let check = s => {
        let max = 0;
        let curSum = 0;  
        let counter = 1;     
        nums.forEach((num, i) => {
            if (curSum + num >= s){
                max = Math.max(max, curSum);
                curSum = num;  
                counter++;            
            } else {
                curSum += num;
            }
        })
   
        max = Math.max(max, curSum);
      
        if (max > s || counter > m) return true;
        return false;
    }
    let binSearchR = (l, r, check) => {
        while (l < r) {
            let m = Math.floor((l + r + 1) / 2);
            if (check(m)) {
                l = m;
            } else {
                r = m - 1;
            }
        }
        return l;
    }
    let len = nums.length;
    let l = Math.max(...nums);
    let r = Math.max(nums.slice(0, len - (m - 1)).reduce((acc, val) => acc += val, 0), nums.slice(m - 1).reduce((acc, val) => acc += val, 0));
    return binSearchR(l, r, check);
};