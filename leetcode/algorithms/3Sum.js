// Source : https://leetcode.com/problems/3sum/
// Author : avebeatrix
// Date   : 2021-12-06
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let L = nums.length;
    let result = [];

    let new_arr = [...nums].sort((a, b) => a - b);

    if (L < 3) return result;

    let map_indexes = new Map();
    new_arr.forEach((num, index) => {
        if (map_indexes.has(num)) {
            map_indexes.get(num).push(index);
        } else {
            map_indexes.set(num, [index]);
        }
    })


    for (let i = 0; i < L; i++) {
        if (i > 0 && new_arr[i] === new_arr[i - 1]) {
            continue;
        }
        for (let j = i + 1; j < L; j++) {
            if (j > i + 1 && new_arr[j] === new_arr[j - 1]) {
                continue;
            }
            let third_val = 0 - new_arr[i] - new_arr[j];
            if (map_indexes.has(third_val)) {
                let tmp_arr = map_indexes.get(third_val).filter(val => val > i && val > j);
                if (tmp_arr.length){
                    result.push([new_arr[i], new_arr[j], new_arr[tmp_arr[0]]]);
                }               
            }
        }
    }

    return result;
};

let d = threeSum([0, 0, 0, 0]);
let k;