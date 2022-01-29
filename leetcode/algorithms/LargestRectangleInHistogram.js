// Source : https://leetcode.com/problems/largest-rectangle-in-histogram/
// Author : avebeatrix
// Date   : 2022-01-29
/**
 * @param {number[]} heights
 * @return {number}
 */
//O(n)
 var largestRectangleArea = function(heights) {    
    
    let n = heights.length;
    let max = 0;     	
    let stack = [];
          
    for(let i = 0; i <= n; i++) {  
        let step = 0;
        let bar = heights[i] || 0;
        while(stack.length && stack[stack.length-1][1] >= bar) {
            let [w, h] = stack.pop();
            step += w;
			max = Math.max(max, step * h);
        }
        stack.push([step+1, bar]);                   
    }    
	return max;	
};
