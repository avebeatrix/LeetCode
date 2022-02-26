// Source : https://leetcode.com/problems/shortest-path-visiting-all-nodes/
// Author : avebeatrix
// Date   : 2022-02-26
/**
 * @param {number[][]} graph
 * @return {number}
 */
/* need to be improved */
 var shortestPathLength = function(graph) {
    let len = graph.length;
    if (len === 1) return 0;
    
    let min = Infinity;
    let queue;    
    let new_queue;
    let topbit = Number(Array(len).fill(1).join('')); 
    let steps;  
    let seen = new Map(); 

    let getPath = () => {
        while (true) {
            for(let qi of queue){
                let [last_of_current_seq, bitmap] = qi;
                let next = graph[last_of_current_seq];                
               
                for (let ni of next) {                                
                    let new_bitmap = String(bitmap).padStart(len, '0').split('');                   
                    new_bitmap[len - ni - 1] = '1';       
                    new_bitmap = Number(new_bitmap.join(''));             
    
                    if (new_bitmap === topbit) {
                        return steps;
                    }                  
                    if (!seen.get(ni).has(new_bitmap)){
                        seen.get(ni).add(new_bitmap);                    
                        new_queue.push([ni, new_bitmap]);
                    }                    
                }                        
            }    
            if (!new_queue.length) break;
            queue = new_queue;
            new_queue = [];
            steps++;
        }                
    }
    let bitmap;   
   
    graph.forEach((nodes, i) => {
        bitmap = 10 ** i;
        queue = [[i, bitmap]];    
        new_queue = [];    
        steps = 1;
        seen = new Map(); 
        Array(len).fill(0).forEach((val, i) => seen.set(i, new Set()))
        min = Math.min(min, getPath());
    })
    return min;
};