// Source : https://leetcode.com/problems/count-and-say/
// Author : avebeatrix
// Date   : 2021-12-02
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {    
    if(n===1) return "1";
              
    let res = '';
    let arr = countAndSay(n-1).toString().split('');
    let prev = '';
    let counter = 0;
    arr.forEach(val => {
        if (val !== prev) {
            if (counter > 0) {
                res += counter + prev;
            }
            counter = 1;
            prev = val;
        }else{
            counter++;
        }
    })
    res += counter + prev;
    return res.toString();
};