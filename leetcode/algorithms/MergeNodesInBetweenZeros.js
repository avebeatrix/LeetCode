// Source : https://leetcode.com/problems/merge-nodes-in-between-zeros/
// Author : avebeatrix
// Date   : 2022-02-20
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
    let begin = head;
    let node = begin.next;
    let sum = 0;
    let last_node = begin.next;
    while (node) {
        if (node.val) {
            sum += node.val;
        } else {
            let sum_node = {
                val: sum,
                next: node
            }
            begin.next = sum_node;
            begin = sum_node;
            last_node = sum_node;
            sum = 0;
        }
        node = node.next;
    }
    last_node.next = null;
    return head.next;
};