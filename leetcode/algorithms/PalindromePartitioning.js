// Source : https://leetcode.com/problems/palindrome-partitioning/
// Author : avebeatrix
// Date   : 2022-01-05
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let result = [[...s.split(''), 0]];
    let i = 0;
    while (i < result.length) {
        let arr = [...result[i]];

        for (let j = arr[arr.length - 1]; j < arr.length; j++) {
            let str = arr[j];
            for (let k = j + 1; k < arr.length; k++) {
                str += arr[k];
                let reversed_str = str.split('').reverse().join('');
                if (str === reversed_str) {
                    result.push([...arr.slice(0, j), str, ...arr.slice(k + 1, arr.length - 1), j + 1]);
                }
            }
        }
        i++;
    }

    return result.map(val => {
        val.pop();
        return val;
    });
};