// Source : https://leetcode.com/problems/min-cost-to-connect-all-points/
// Author : avebeatrix
// Date   : 2022-04-26
/**
 * @param {number[][]} points
 * @return {number}
 */
 var minCostConnectPoints = function(points) {   
    let l = points.length;
    let inMST = new Set();
    let minDist = Array(l).fill(Infinity);
    minDist[0] = 0;

    let i = 0;
    
    while (inMST.size < l) {
        let currentMinEdge = Infinity;
        for(let k = 0; k < l; k++) {
            if (!inMST.has(k) && minDist[k] < currentMinEdge){
                currentMinEdge = minDist[k];
                i = k;               
            }
        }       

        let minIndex = 0;
        for (let j = 0; j < l; j++) {
            if (i != j && !inMST.has(j)) {
                let d = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
                if (d < minDist[j]) {                                    
                    minIndex = j;       
                    minDist[j] = d;       
                }                                          
            }            
        }
        
        inMST.add(i);                                                                    
    }
   
    return minDist.reduce((acc, val) => acc += val, 0);
};