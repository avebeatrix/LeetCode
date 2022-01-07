// Source : https://leetcode.com/problems/linked-list-random-node/
// Author : avebeatrix
// Date   : 2022-01-07
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
 var Solution = function(head) {
    this.head = head;  
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    let current_value = 0;
    let node = this.head;
    let i = 1;
    while (node) {
        if (Math.random() < 1 / i) current_value = node.val;       
        i++;
        node = node.next;
    }
    return current_value;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */