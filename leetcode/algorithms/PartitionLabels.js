// Source : https://leetcode.com/problems/partition-labels/
// Author : avebeatrix
// Date   : 2022-03-21
/**
 * @param {string} s
 * @return {number[]}
 */
 var partitionLabels = function(s) {
    let parts = [];
    let prev_pointer = 0;     

    let first_appearance_map = new Map();
    
    s.split('').forEach((char, i) => {
        if (!first_appearance_map.has(char)) {
            first_appearance_map.set(char, i);
            parts.push(i);  
            prev_pointer = i + 1;
        } else {           
            parts = parts.filter(val => val <= first_appearance_map.get(char));               
            prev_pointer = parts[parts.length - 1];
        }       
    })
    return parts.map((val, i) => (parts[i+1] || s.length) - val);
};