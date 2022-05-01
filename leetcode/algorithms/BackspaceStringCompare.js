// Source : https://leetcode.com/problems/backspace-string-compare/
// Author : avebeatrix
// Date   : 2022-05-01
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
    let ps = 0;
    let pt = 0;
    let backspace = (str, p) => {
        if (p >= str.length + 1) return [str, p];
        if (str[p] === '#') { 
            let rest = str.slice(p + 1);     
            if (p) {
                str = str.slice(0, p - 1);  
                p--;                           
            } else {  
                str = '';                              
            } 
            str = str + rest;                             
        } else {
            p++;
        }
        return [str, p];
    }
    while (ps < s.length || pt < t.length) {       
        [s, ps] = backspace(s, ps);               
        [t, pt] = backspace(t, pt);       
    }
    return s === t;
};
console.log(backspaceCompare("j##xfix", "j###xfix"));