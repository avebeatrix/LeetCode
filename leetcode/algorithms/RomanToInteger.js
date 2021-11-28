// Source : https://leetcode.com/problems/roman-to-integer/
// Author : avebeatrix
// Date   : 2021-11-28
/**
 * @param {string} s
 * @return {number}
 */
/*
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
 */
var romanToInt = function (s) {
    let result = 0;  
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case 'I':
                if ((s[i + 1] ?? '') == 'V') {
                    result += 4;
                    i++;
                } else if ((s[i + 1] ?? '') == 'X') {
                    result += 9;
                    i++;
                } else {
                    result += 1;
                }
                break;
            case 'V':
                result += 5;
                break;
            case 'X':
                if ((s[i + 1] ?? '') == 'L') {
                    result += 40;
                    i++;
                } else if ((s[i + 1] ?? '') == 'C') {
                    result += 90;
                    i++;
                } else {
                    result += 10;
                }
                break;
            case 'L':
                result += 50;           
                break;
            case 'C':
                if ((s[i + 1] ?? '') == 'D') {
                    result += 400;
                    i++;
                } else if ((s[i + 1] ?? '') == 'M') {
                    result += 900;
                    i++;
                } else {
                    result += 100;
                }
                break;
            case 'D':
                result += 500;                          
                break;
            case 'M':
                result += 1000;        
                break;
            default:
                break;
        }
    }
    return result;
};
let res = romanToInt('MCMXCIV');
console.log(res);
