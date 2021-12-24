// Source : https://leetcode.com/problems/coin-change/
// Author : avebeatrix
// Date   : 2021-12-24
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    if (!amount) return 0;
    if (Math.min(coins) > amount) return -1;

    coins = coins.filter(coin => coin <= amount);

    let len = coins.length;   

    for (let i = 0; i < len; i++) {
        if (coins[i] === amount) return 1;
    }

    let map = new Map();
    for (let i = 1; i < amount; i++) {
        for (let j = 0; j < len; j++) {
            if (coins[j] + i === amount) {
                map.set(i, 1);
            }
        }
    }
    
    while (map.size) {
        let tmp_map = new Map();                
        for(let val of [...map]){
            let [index, counter] = val;
            for (let j = 0; j < len; j++) {
                if ( index >= coins[j]) {
                    if (index - coins[j] === 0) return counter + 1;
                    if (index - coins[j] > 0) {
                        tmp_map.set(index - coins[j], counter + 1);
                    }
                }
            }
        }            
        map = tmp_map;
    }

    return -1;
};
