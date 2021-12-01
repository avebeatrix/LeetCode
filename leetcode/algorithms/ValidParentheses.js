// Source : https://leetcode.com/problems/valid-parentheses/
// Author : avebeatrix
// Date   : 2021-12-01
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let checkBalance = (s, useStack = false) => {
        let l = s.length;
        let balance1 = 0;
        let balance2 = 0;
        let balance3 = 0;
        for (let i = 0; i < l; i++) {
            if (useStack) {
                stack = {
                    val: s[i],
                    prev: stack
                }
            }
            switch (s[i]) {
                case '(':
                    balance1++;
                    break;
                case ')':
                    balance1--;
                    if (useStack && !checkStack('(')) {
                        return false;
                    };
                    break;
                case '[':
                    balance2++;
                    break;
                case ']':
                    balance2--;
                    if (useStack && !checkStack('[')) {
                        return false;
                    };
                    break;
                case '{':
                    balance3++;
                    break;
                case '}':
                    balance3--;
                    if (useStack && !checkStack('{')) {
                        return false;
                    };
                    break;
                default:
                    break;
            }
            if (balance1 < 0 || balance2 < 0 || balance3 < 0) {
                return false;
            }
        }
        if (balance1 !== 0 || balance2 !== 0 || balance3 !== 0) {
            return false;
        }
        return true;
    }

    let checkStack = (open_type) => {                
        if (stack.prev) {
            let substr = '';
            if (stack.prev !== open_type) {                         
                while (stack?.prev && stack.prev.val !== open_type) {
                    stack = stack.prev;
                    substr = stack.val + substr;
                }
            }            
            if (!checkBalance(substr)) return false;            
            stack = stack?.prev?.prev ?? null;
        }
        return true;
    }

    let stack = null;

    return checkBalance(s, true);

};
let d = isValid('(([]){})');
let k;