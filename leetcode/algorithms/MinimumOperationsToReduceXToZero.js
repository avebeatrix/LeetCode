// Source : https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/
// Author : avebeatrix
// Date   : 2022-06-11
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
 var minOperations = function(nums, x) {   

    let lBinSearch = (l, r, x) => {
        while (l < r) {
            let m = Math.floor((l + r) / 2);
            if (prefix_right[m] < x) {
                l = m + 1;
            } else {
                r = m;
            }
        }
        return l;
    }

    let result = Infinity;
    let N = nums.length;
    let prefix_left = [];
    let prefix_right = [];

    nums.forEach((val, i) => {
        prefix_left[i] = val + (prefix_left[i - 1] || 0);
        prefix_right[i] = nums[N - i - 1]  + (prefix_right[i - 1] || 0);
        if (prefix_left[i] === x || prefix_right[i] === x) {
            result = Math.min(result, i + 1);
        }        
    }) 
    
    if (result <= 2) return result;

    prefix_left = prefix_left.filter(val => val <= x);
    prefix_right = prefix_right.filter(val => val <= x);
    
    let plN = prefix_left.length;
    let prN = prefix_right.length;

    for (let i = 0; i < plN; i++) {
        if (prefix_left[i] === x) {
            result = Math.min(result, i + 1);   
            break;             
        }
        let target = x - prefix_left[i];
        let finded_index = lBinSearch(0, prN, target);
        if (prefix_right[finded_index] === target && N - finded_index - 1 !== i) {
            result = Math.min(result, i + finded_index + 2);                
        }
    } 
  
    return result === Infinity ? - 1 : result;
};