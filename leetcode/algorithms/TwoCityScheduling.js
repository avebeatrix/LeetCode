// Source : https://leetcode.com/problems/two-city-scheduling/
// Author : avebeatrix
// Date   : 2022-03-25
/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {    
    let res = 0;

    let sorted = [...costs].map((val, i) => [val[0], val[1], i]);
    sorted.sort((a, b) => Math.abs(b[1] - b[0]) - Math.abs(a[1] - a[0]));

    let countA = 0;
    let countB = 0;

    let half = costs.length / 2;

    sorted.forEach((val, i) => {
        let [a, b] = val;
        if (a < b && countA < half || countB === half) {
            res += a;
            countA++;
        } else {
            res += b;
            countB++;
        }
    })

    return res;
};