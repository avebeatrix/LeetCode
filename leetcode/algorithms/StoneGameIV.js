// Source : https://leetcode.com/problems/stone-game-iv/
// Author : avebeatrix
// Date   : 2022-01-22
/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function (n) {
    let map = new Map();
    map.set(0, false);
    let dfs = (remain) => {
        if (map.has(remain)){
            return map.get(remain);
        }      
        let sqrt_root = Math.floor(Math.sqrt(remain));
        for (let i = 1; i <= sqrt_root; i++) {
            let res = dfs(remain - i * i);                                     
            if (!res) {
                map.set(remain, true);   
                return true;
            }
        }
        map.set(remain, false);   
        return false;
    }

    return dfs(n);
};
console.log(winnerSquareGame(7));