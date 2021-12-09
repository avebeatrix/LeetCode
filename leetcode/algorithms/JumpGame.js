// Source : https://leetcode.com/problems/jump-game/
// Author : avebeatrix
// Date   : 2021-12-09
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let events = []
    for (let i = 0; i < nums.length; i++) {
        events.push([i, -1]);
        events.push([i + nums[i], 1]);
    }
    events.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });
    let counter = 0;
    for (let event of events) {
        if (event[1] === 1) {
            counter--;
        } else {
            counter++;
        }
        if (counter === 0 && event[0] < nums.length - 1) {
            return false;
        }
    }
    return true;
};