// Source : https://leetcode.com/problems/find-the-town-judge/
// Author : avebeatrix
// Date   : 2022-01-03
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    let map_trust = new Map();
    let no_judge_set = new Set();
    trust.forEach((arr) => {
        let [a, b] = arr;
        no_judge_set.add(a);
        if (map_trust.has(b)) {
            map_trust.get(b).push(a);
        } else {
            map_trust.set(b, [a]);
        }
    })

    let candidates = [];

    for (let i = 1; i <= n; i++) {
        if (!no_judge_set.has(i)) {
            if (!map_trust.size || map_trust.has(i) && map_trust.get(i).length === n - 1) {
                candidates.push(i);
            }
        }
    }

    if (!candidates.length || candidates.length > 1) return -1;
    return candidates.pop();
};