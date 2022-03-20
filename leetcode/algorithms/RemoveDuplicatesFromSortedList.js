// Source : https://leetcode.com/problems/remove-duplicates-from-sorted-list/
// Author : avebeatrix
// Date   : 2022-03-20
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
var deleteDuplicates = function (head) {
    let node = head;
    let prev = node;
    while (node) {
        if (node.val != prev.val) {
            prev.next = node;
            prev = node;
        }
        node = node.next;
    }
    if (prev) {
        prev.next = null;
    }
    return head;
};