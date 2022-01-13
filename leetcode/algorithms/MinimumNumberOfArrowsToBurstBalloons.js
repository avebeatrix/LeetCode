// Source : https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/
// Author : avebeatrix
// Date   : 2022-01-13
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    let events = [];
    points.forEach((point, i) => {
        events.push([point[0], -1, i]);
        events.push([point[1], 1, i]);
    })
    events.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    })

    let arrow_counter = 0;   
    let bursted_set = new Set();
    let current_set = new Set();
    for (let event of events) {
        if (event[1] === 1 && !bursted_set.has(event[2])) {
            arrow_counter++;                                  
           
            current_set.forEach(val => {
                bursted_set.add(val);
            })
            current_set = new Set();
            if (bursted_set.size === points.length) return arrow_counter;
        } else {           
            current_set.add(event[2]);
        }
    }
};