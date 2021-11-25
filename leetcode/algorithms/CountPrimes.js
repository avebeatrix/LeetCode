// Source : https://leetcode.com/problems/count-primes/
// Author : avebeatrix
// Date   : 2021-11-24
/**
 * @param {number} n
 * @return {number}
 */

var countPrimes = function (n) {
    let count = 0;
    let primes = new Array(n).fill(true);

    for (let i = 2; i * i <= n; i++) {
        if (!primes[i]) continue;
        for (let j = i * i; j < n; j += i) {
            primes[j] = false;
        }
    }

    for (let i = 2; i < n; i++) {
        if (primes[i]) {
            count++;
        }
    }
    return count;
};