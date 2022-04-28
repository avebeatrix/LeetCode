// Source : https://leetcode.com/problems/path-with-minimum-effort/
// Author : avebeatrix
// Date   : 2022-04-28
/**
 * @param {number[][]} heights
 * @return {number}
 */
 import {  
    MinPriorityQueue,    
} from '@datastructures-js/priority-queue';

 var minimumEffortPath = function(heights) {    
    let row_length = heights.length;
    let col_length = heights[0].length;
        
    let effort = Array(row_length).fill(0).map(val => Array(col_length).fill(Infinity));
    effort[0][0] = 0;
    let queue = new MinPriorityQueue({
        priority: x => x.priority 
     });

    const dir = [
        [-1, 0],
        [0, -1],
        [1, 0],
        [0, 1]
    ]

    queue.enqueue({
        row: 0,
        col: 0,
        priority: 0
    });
    while(queue.size()) {
        let {row, col, last_effort} = queue.dequeue().element;        
        
        dir.forEach(d => {
            let [r, c] = d;
            r = row + r;
            c = col + c;            
            if (r < row_length && r >= 0 && c < col_length && c >= 0){
                let new_potential_val = Math.max(Math.abs(heights[r][c] - heights[row][col]), effort[row][col]);
                if (new_potential_val < effort[r][c]){
                    effort[r][c] = new_potential_val; 
                    queue.enqueue({
                        row: r,
                        col: c,
                        priority: effort[row][col]
                    });                       
                }
            }            
        })       
    }
    
    return effort[row_length - 1][col_length - 1];
};