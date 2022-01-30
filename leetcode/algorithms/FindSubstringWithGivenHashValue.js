// Source : https://leetcode.com/problems/find-substring-with-given-hash-value/
// Author : avebeatrix
// Date   : 2022-01-30
/**
 * @param {string} s
 * @param {number} power
 * @param {number} modulo
 * @param {number} k
 * @param {number} hashValue
 * @return {string}
 */
var subStrHash = function (s, power, modulo, k, hashValue) {
    if (k === 1 && hashValue === 1) return s[0];

    let n = s.length;

    var mod = function (n, m) {
        var remain = n % m;
        if (remain >= 0n){
            return remain;
        }else {
            return remain + m
        }        
    };

    let vals = [];
    for (let c of s) {       
        vals.push(BigInt(c.charCodeAt(0) - 'a'.charCodeAt(0) + 1));
    }

    let powers = [1n, BigInt(power)];  
    let hash = 0n;    
    let tmp = BigInt(power);
    for (let i = 0; i < k; i++) {
        if (i > 1) {
            tmp = mod(tmp * BigInt(power), BigInt(modulo));
            powers.push(tmp);
        }
                
        hash += vals[n - k + i] * powers[i];
    }
   
    let idx = n - k;

    for (let i = n - k - 1; i >= 0; i--) {     
        let a = ((hash - vals[i + k] * powers[k - 1]) * BigInt(power) + vals[i]);
        
        hash = mod(a, BigInt(modulo));                  
       
        if (hash == hashValue) {
            idx = i;
        }
    }
    return s.slice(idx, idx + k);
};