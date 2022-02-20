// Source : https://leetcode.com/problems/remove-covered-intervals/
// Author : avebeatrix
// Date   : 2022-02-20
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
    let events = [];
    let l = intervals.length;
    intervals.sort((a, b) => {
        if (a[0] === b[0]){
            return a[1] - b[1];
        }
        return a[0] - b[0];
    })
    for (let i = 0; i < l; i++) {
        events.push([intervals[i][0], 1, i]);
        events.push([intervals[i][1], -1, i]);
    }
    events.sort((a, b) => {
        if (a[0] === b[0]){
            if (a[2] === b[2]){
                return a[1] - b[1];
            }
            return b[2] - a[2];    
        }
       return a[0] - b[0];
    });
    let counter = 0;
    let map = new Map(); /* to do - need make current set instead of map */
    for(let event of events) {
        let index = event[2];
        if (event[1] === 1) {
            for(let key of map.keys()) {
                let opened = map.get(key);
                opened.add(index);
            }
            map.set(index, new Set());            
        } else {
            for(let key of map.keys()) {
                let opened = map.get(key);
                if (opened.has(index)){
                    counter++;
                    opened.delete(index);
                    break;
                }                
            }            
            map.delete(index);
        }
    }
    return l - counter;
};
