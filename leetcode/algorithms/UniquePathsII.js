// Source : https://leetcode.com/problems/unique-paths-ii/
// Author : avebeatrix
// Date   : 2022-05-20
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let M = obstacleGrid.length;
    let N = obstacleGrid[0].length;
    if (obstacleGrid[0][0] === 1 || obstacleGrid[M - 1][N - 1] === 1) return 0;   

    const DIRS = [[0, 1], [1, 0]];
    let dp = Array(M * N).fill(0);
    dp[0] = 1;
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            let new_dp = [...dp];
            DIRS.forEach(dir => {
                let [row_offset, col_offset] = dir;
                let new_row = i + row_offset;
                let new_col = j + col_offset;
                if (new_row >=0 && new_row < M && new_col >= 0 && new_col < N && obstacleGrid[new_row][new_col] !== 1) {                   
                    new_dp[new_row * N + new_col] += dp[i * N + j];
                }                
            })
            dp = new_dp;            
        }
    }
    return dp[dp.length - 1];
};
