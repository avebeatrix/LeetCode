// Source : https://leetcode.com/problems/boats-to-save-people/
// Author : avebeatrix
// Date   : 2022-03-24
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a, b) => a - b);
    let res = 0;
    while (people[people.length - 1] === limit) {
        res++;
        people.pop();
    }
    let lp = 0;
    let rp = people.length - 1;
    while(lp < rp) {
        if (people[lp] + people[rp] <= limit) {       
            lp++;
        }
        res++;  
        rp--;
    }
    if (lp === rp) res++;
    return res;
};
console.log(numRescueBoats(people = [1], limit = 5));