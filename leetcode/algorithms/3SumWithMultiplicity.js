// Source : https://leetcode.com/problems/3sum-with-multiplicity/
// Author : avebeatrix
// Date   : 2022-03-06
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function (arr, target) {
    const MODULO_BASE = 10**9 + 7;
    let combination = (k, n) => {
        k = BigInt(k);
        n = BigInt(n);
        return parseInt(factorial(n) / (factorial(n - k) * factorial(k)) % BigInt(MODULO_BASE));
    }
    let factorial = (n) => {
        let res = 1n;
        for(let i = 2n; i <= n; i++) {
            res = (res * i);
        }
        return res;
    }
    let map = new Map();
    arr.forEach(val => {
        map.set(val, (map.get(val) || 0) + 1);
    })
    let sortedUniqueArr = [...map.keys()];
    sortedUniqueArr.sort((a, b) => a - b);
    let p1 = 0;
    let p2 = 0;
    let half = Math.floor(target / 2);
    let result = 0;
    while (sortedUniqueArr[p1] <= half) {
        while (sortedUniqueArr[p2] <= half) {
            let [v1, v2, v3] = [sortedUniqueArr[p1], sortedUniqueArr[p2], target - sortedUniqueArr[p1] - sortedUniqueArr[p2]];                       
            if (v3 >= v2 && map.has(v3)) {
                let [c1, c2, c3] = [map.get(v1), map.get(v2), map.get(v3)];
                
                if (v1 === v2 && v2 === v3) {
                    if (c1 >= 3) {
                        result += combination(3, c1);
                    }                    
                } else if (v1 === v2) {
                    if (c1 >= 2) {
                        result += combination(2, c1) * combination(1, c3);
                    }                    
                } else if (v2 === v3) {
                    if (c3 >= 2){
                        result += combination(1, c1) * combination(2, c3);
                    }                    
                } else {
                    result += combination(1, c1) * combination(1, c2) * combination(1, c3);
                }              
            }
            p2++;
        }
        p1++;
        p2 = p1;
    }
    return result;
};