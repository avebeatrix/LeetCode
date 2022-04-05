// Source : https://leetcode.com/problems/container-with-most-water/
// Author : avebeatrix
// Date   : 2022-04-05
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let len = height.length;
    let ans = 0;
    let start = 0;
    let end = len - 1;

    while (start < end) {
        let area = Math.min(height[start], height[end]) * (end - start);
        ans = Math.max(ans, area);

        if (height[start] > height[end])
            end--;
        else
            start++;
    }

    return ans;
};