// Source : https://leetcode.com/problems/merge-sorted-array/
// Author : avebeatrix
// Date   : 2021-11-18

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let pointer1 = 0;
    let pointer2 = 0;
    let counter = 0;
    let arr = [];    
    if (n === 0) return;
    while (counter < n + m) {
        if (pointer1<m && (pointer2 >= n || nums1[pointer1] <= nums2[pointer2])) {
            arr.push(nums1[pointer1]);           
            pointer1++;           
        } else {
            arr.push(nums2[pointer2]);
            pointer2++;
        }
        counter++;
    }
    arr.forEach((val, i) => {
        nums1[i] = val;
    })
};