// Source : https://leetcode.com/problems/car-pooling/
// Author : avebeatrix
// Date   : 2022-01-06
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
 var carPooling = function(trips, capacity) {
    let events = [];
    trips.forEach(trip => {
        events.push([trip[0], trip[1], 1]);
        events.push([trip[0], trip[2], -1]);
    })
    events.sort((a, b) => {
        if (a[1] == b[1]) {
            return a[2] - b[2];
        }
        return a[1] - b[1];
    })
    let balance = 0;
    for(let event of events) {
        if (event[2] == 1) {
            balance += event[0];
        } else {
            balance -= event[0];
        }
        if (balance > capacity) return false;
    }
    return true;
};