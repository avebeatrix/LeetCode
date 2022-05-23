// Source : https://leetcode.com/problems/ones-and-zeroes/submissions/
// Author : avebeatrix
// Date   : 2022-05-23
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var findMaxForm = function(strs, m, n) {
    let dp = Array(m + 1).fill(0).map(val => Array(n + 1).fill(0));   
	for(let str of strs) {		      		
        let zeros = 0;
        let ones = 0;
        str.split('').forEach(val => val === '1' ? ones++ : zeros++);
	
		for(let i = m; i >= zeros; i--)
			for(let j = n; j >= ones; j--)                    
				dp[i][j] = Math.max(dp[i][j], dp[i - zeros][j - ones] + 1);
		
	}
	return dp[m][n];
};
console.log(findMaxForm(["10","0001","111001","1","0"], 1, 1));