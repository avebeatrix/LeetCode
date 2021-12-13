// Source : https://leetcode.com/problems/top-k-frequent-elements/
// Author : avebeatrix
// Date   : 2021-12-13
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let mapCounter = new Map();

    let result = new Set();

    nums.forEach(num => {
        result.add(num);
        mapCounter.set(num, (mapCounter.get(num) ?? 0) + 1);
    });

    result = [...result];

    let lomutoPartition = (left, right) => {
        let index = left;
        while (index < right) {
            if (mapCounter.get(result[index]) < mapCounter.get(result[right])) {
                [result[left], result[index]] = [result[index], result[left]];
                left++;
            }
            index++;
        }
        if (mapCounter.get(result[left]) > mapCounter.get(result[right])) {
            [result[left], result[right]] = [result[right], result[left]];
        }
        return left;
    }

    let quickSelect = (left, right, goal) => {
        let partitionIndex = lomutoPartition(left, right);
        if (partitionIndex === goal) {           
            return result.slice(goal);
        }
        if (partitionIndex < goal) {
            return quickSelect(partitionIndex + 1, right, goal);
        } else {
            return quickSelect(left, partitionIndex - 1, goal);
        }
    }
    let L = result.length - 1;   
    return quickSelect(0, L, L + 1 - k);
};