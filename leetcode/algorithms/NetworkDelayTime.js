// Source : https://leetcode.com/problems/network-delay-time/
// Author : avebeatrix
// Date   : 2022-05-14
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

 import {  
    MinPriorityQueue,    
} from '@datastructures-js/priority-queue';


var networkDelayTime = function (times, n, k) {
    let visited = new Set();

    let graph = {};

    for (let [from, to, time] of times) {
        if (!graph[from]) {
            graph[from] = [];
        }
        graph[from].push([to, time]);
    }

    let queue = new MinPriorityQueue({
        priority: x => x.cost 
     });

    queue.enqueue({
        node: k,
        cost: 0
    });
    
    let max_cost = 0;
   
    while (queue.size()) {       
        let {cost, node} = queue.dequeue().element;        

        if (visited.has(node)) {
            continue;
        }


        visited.add(node);

        max_cost = Math.max(max_cost, cost);

        let neighbours = graph[node];

        if (neighbours) {
            for (let neighbour of neighbours) {
                let [new_node, new_cost] = neighbour;
                if (!visited.has(new_node)) {
                    let curr_cost = cost + new_cost;
                 
                    queue.enqueue({
                        node: new_node,
                        cost: curr_cost
                    });
                }
            }
        }
        
    }
    return visited.size === n ? max_cost : -1;
};