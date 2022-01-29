// Source : https://leetcode.com/problems/largest-rectangle-in-histogram/
// Author : avebeatrix
// Date   : 2022-01-29
/**
 * @param {number[]} heights
 * @return {number}
 */
 var largestRectangleArea = function(heights) {    
    let min_val = Math.min(...heights);
    let max_val = Math.max(...heights);   
    let n = heights.length;
    let max = min_val * n;     	
    if (min_val === max_val) return max;            
    for(let i = 0; i < n; i++) {                        
        let left = 0;
        for(let j = i-1; j >=0; j--) {
            if (heights[j] < heights[i]){
                left = j + 1;                
                break;
            }
        }
        let right = n-1;
        for(let j = i+1; j < n; j++) {
            if (heights[j] < heights[i]){   
                right = j - 1;                                
                break;
            }                
        }        
        max = Math.max(max, (right - left + 1) * heights[i]);                          
    }    
	return max;	
};