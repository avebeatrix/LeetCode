// Source : https://leetcode.com/problems/intersection-of-two-arrays-ii/
// Author : avebeatrix
// Date   : 2021-11-29
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let add = (map1, map2) => {
        map1.forEach((count, num) => {
            if (map2.has(num)) {
                let intersect_count = Math.min(map1.get(num), map2.get(num));
                for (let i = 0; i < intersect_count; i++) {
                    result.push(num);
                }
                map1.set(num, map1.get(num) - intersect_count);
                map2.set(num, map2.get(num) - intersect_count);
                if (map1.get(num) === 0) {
                    map1.delete(num);
                }
                if (map2.get(num) === 0) {
                    map2.delete(num);
                }
            }
        })
    }
    let map1 = new Map();
    let map2 = new Map();
    nums1.forEach(num => {
        map1.set(num, (map1.get(num) ?? 0) + 1);
    })
    nums2.forEach(num => {
        map2.set(num, (map2.get(num) ?? 0) + 1);
    })
    let result = [];
    add(map1, map2);
    add(map2, map1);
    return result;
};
intersect([4,9,5], [9,4,9,8,4]);