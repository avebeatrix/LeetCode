// Source : https://leetcode.com/problems/compare-version-numbers/
// Author : avebeatrix
// Date   : 2022-02-25
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let arr1 = version1.split('.');
    let arr2 = version2.split('.');
    let l1 = arr1.length;
    let l2 = arr2.length;
    let arr_to_fill = l1 > l2 ? arr2 : arr1;
    for (let i = 0; i < Math.abs(l1 - l2); i++) {
        arr_to_fill.push(0);
    } 
    let p1 = 0;
    let p2 = 0;
    while (p1 < arr_to_fill.length) {       
       
        let n1 = Number(arr1[p1]);
        let n2 = Number(arr2[p2]);

        if (n1 < n2) {
            return -1;
        } else if (n1 > n2) {
            return 1;
        } else {
            p1++;
            p2++;
        }
    }  
    return 0;
};