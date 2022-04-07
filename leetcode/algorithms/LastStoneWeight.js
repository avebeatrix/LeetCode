// Source : https://leetcode.com/problems/last-stone-weight/
// Author : avebeatrix
// Date   : 2022-04-07
/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
     // https://github.com/datastructures-js/priority-queue
    let pq = new MaxPriorityQueue();

    stones.forEach(stone => pq.enqueue(stone));
   
    while (pq.size() > 1) {
        let y = pq.dequeue().element;
        let x = pq.dequeue().element;   
        if (y > x) {
            pq.enqueue(y - x);
        }
    }
    if (!pq.size()) return 0;
    return pq.front().element;
};