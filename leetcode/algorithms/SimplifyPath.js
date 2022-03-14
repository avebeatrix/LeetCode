// Source : https://leetcode.com/problems/simplify-path/
// Author : avebeatrix
// Date   : 2022-03-14
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let parts = [];
    let cur = '';
    for (let char of path) {
        if (char === '/') {
            switch (cur[cur.length - 1]) {
                case '/':
                    cur = '/';
                    break;
                case '.':
                    if (cur === '.') {
                        cur = '/';
                    } else if (cur === '..') {
                        parts.pop();
                        cur = '';
                    } else {
                        parts.push(cur);
                        cur = '/';
                    }
                    break;
                default:
                    if (cur) {
                        parts.push(cur);
                        cur = '/';
                    }
                    break;
            }
        } else if (char === '.') {
            switch (cur[cur.length - 1]) {
                case '/':
                    cur = '.';
                    break;
                case '.':
                    cur += '.';
                    break;
                default:
                    cur += char;
                    break;
            }
        } else {
            if (cur[cur.length - 1] === '/') {
                cur = '';
            }
            cur += char;
        }
    }
    if (cur === '.') {
    } else if (cur === '..') {
        parts.pop();
    } else if (cur && cur.indexOf('/')) {
        parts.push(cur);
    }
    return '/' + parts.join('/');
};
