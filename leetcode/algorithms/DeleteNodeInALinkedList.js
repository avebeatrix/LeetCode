// Source : https://leetcode.com/problems/delete-node-in-a-linked-list/
// Author : avebeatrix
// Date   : 2021-11-18

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
    let last_node;
    while (node.next) {
        node.val = node.next.val;
        last_node = node;
        node = node.next;
    }
    last_node.next = null;
};