// Source : https://leetcode.com/problems/hamming-distance/
// Author : avebeatrix
// Date   : 2021-11-25
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    x = x.toString(2);
    y = y.toString(2);
    
    let nulls = new Array(Math.abs(x.length-y.length)).fill(0);
    if (x.length<y.length){
        x = [...nulls, ...x.split('')].join('');
    }else{
        y = [...nulls, ...y.split('')].join('');
    }

    let i = 0;
    let result = 0;
    while (x[i]!==undefined) {       
        if (x[i] !== y[i]) {
            result++;
        }
        i++;
    }
    return result;
};