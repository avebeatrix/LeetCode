// Source : https://leetcode.com/problems/delete-and-earn/
// Author : avebeatrix
// Date   : 2022-03-05
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
    let map = new Map();   
    nums.forEach(num => {
        map.set(num, (map.get(num) || 0) + num);        
    })   

    let arr = Array.from(map);
    arr.sort((a, b) => {
        return a[0] - b[0];
    }) 

    let L = arr.length;
    let result1 = arr[0][1] ?? 0;

    if (arr.length < 2) return result1;
    let sum_of_2_first = arr[0][1] + arr[1][1];
    if (arr.length === 2 && arr[0][0] + 1 < arr[1][0]) return sum_of_2_first;

    let a = [arr[0][1], (arr[0][0] + 1< arr[1][0]) ? sum_of_2_first : Math.max(arr[0][1], arr[1][1])];
    for (let i = 2; i < L; i++) {
        if (arr[i][0] - arr[i-1][0] > 1) {
            a[i] = Math.max(a[i - 1] + arr[i][1], a[i - 2] + arr[i][1]);
        }else{
            a[i] = Math.max(a[i - 1], a[i - 2] + arr[i][1]);
        }
        
    }

    return a[L - 1];   
};