// Source : https://leetcode.com/problems/reverse-linked-list/
// Author : avebeatrix
// Date   : 2021-11-25
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
var reverseList = function (head) {
    let node = head;
    if (node !== null) {
        let node_next = node.next;
        let node_next_next = node.next;
        while (node_next) {
            node_next_next = node_next_next.next;
            node_next.next = node;
            node = node_next;
            node_next = node_next_next;
        }
        head.next = null;
    }
    return node;
};