// Source : https://leetcode.com/problems/4sum-ii/
// Author : avebeatrix
// Date   : 2022-02-03
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    let mapInit = (arr) => {
        let map = new Map();
        arr.forEach((val, i) => {
            map.set(val, (map.get(val) || 0) + 1);
        })
        return map;
    }
    let getMapSum = (map1, map2) => {
        let mapSum = new Map();
        map1.forEach((val1, key1) => {
            map2.forEach((val2, key2) => {
                let sum = key1 + key2;
                mapSum.set(sum, (mapSum.get(sum) || 0) + val1 * val2);
            })
        })
        return mapSum;
    }
    let map1 = mapInit(nums1);
    let map2 = mapInit(nums2);
    let map3 = mapInit(nums3);
    let map4 = mapInit(nums4);
    let mapSum1 = getMapSum(map1, map2);
    let mapSum2 = getMapSum(map3, map4);
    let count = 0;
    mapSum1.forEach((num, sum) => {
        if (mapSum2.has(-sum)) {
            count += num * mapSum2.get(-sum)
        }
    })
    return count;
};