// Source : https://leetcode.com/problems/kth-largest-element-in-a-stream/submissions/
// Author : avebeatrix
// Date   : 2022-04-08
/**
 * @param {number} k
 * @param {number[]} nums
 */
 var KthLargest = function(k, nums) {
    this.k = k;
    this.pq = new MinPriorityQueue();
    nums.forEach(num => this.pq.enqueue(num));    
    while (this.pq.size() > this.k) {
        this.pq.dequeue();
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.pq.enqueue(val);
    while (this.pq.size() > this.k) {
        this.pq.dequeue();
    }

    return this.pq.front();
};