// Source : https://leetcode.com/problems/gas-station/
// Author : avebeatrix
// Date   : 2022-01-21
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 var canCompleteCircuit = function(gas, cost) {    
    let amount = 0;
    let length = gas.length;    
    let index = 0;
    for (let i = 0; i < length; i++) {
        amount += gas[i] - cost[i];
        if (amount < 0) {
            index = i + 1;
            amount = 0;
        }
    }
    if (index) {
        for (let i = 0; i < index; i++) {
            amount += gas[i] - cost[i];
            if (amount < 0) {
                return -1;
            }
        }
    }
    return index;
};