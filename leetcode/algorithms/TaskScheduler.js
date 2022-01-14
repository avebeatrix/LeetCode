// Source : https://leetcode.com/problems/task-scheduler/
// Author : avebeatrix
// Date   : 2022-01-14
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    if (!n) return tasks.length;
    let map = new Map();
    let max = 0;
    tasks.forEach(task => {
        let count = (map.get(task) ?? 0) + 1;
        map.set(task, count);
        max = Math.max(count, max);
    })
    

    return Math.max(tasks.length, (max - 1) * (n + 1) + [...map.values()].filter(val => val === max).length);
};
let d = leastInterval(["A","A","A","B","B","B", "C","C","C", "D", "D", "E"], 2);
let k;