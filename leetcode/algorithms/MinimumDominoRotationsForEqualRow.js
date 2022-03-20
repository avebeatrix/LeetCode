// Source : https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/
// Author : avebeatrix
// Date   : 2022-03-20

/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function (tops, bottoms) {
    let l = tops.length;
    let count = Infinity;  
    [...new Set([tops[0], bottoms[0]])].forEach(i => {
        if (tops.filter((val, index) => val !== i && bottoms[index] !== i).length) return;

        let tf = tops.filter(val => val === i);
        let bf = bottoms.filter(val => val === i);

        if (tf.length + bf.length >= l) {
            count = l - Math.max(tf.length, bf.length);
        }
    })
    return count === Infinity ? -1 : count;
};