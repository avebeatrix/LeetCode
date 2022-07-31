// Source : https://leetcode.com/problems/merge-intervals/
// Author : avebeatrix
// Date   : 2022-07-31
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    let events = [];
    let result = [];
    intervals.forEach(interval => {
        events.push([interval[0], -1], [interval[1], 1]);        
    })
    events.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }
        return a[1] - b[1];
    });
    let current = 0;
    let start = events[0][0];
    events.forEach(event => {
        if (event[1] === -1) {
            if (!current) {
                start = event[0];
            }
            current++;
        } else {
            current--;
            if (!current) {
                result.push([start, event[0]]);
            }
        }
    })
    return result;
};