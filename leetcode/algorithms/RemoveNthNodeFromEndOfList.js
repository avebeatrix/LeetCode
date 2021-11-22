// Source : https://leetcode.com/problems/remove-nth-node-from-end-of-list/
// Author : avebeatrix
// Date   : 2021-11-22
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let prev = head;
    let cur = head;
    let i = 1;
    while (cur.next !== null) {
        i++;
        if (i > n + 1) {
            prev = prev.next;
        }
        cur = cur.next;
    }
    if (i===1){
        return null;
    }
    if (i===2){
        if(n===1){
            head.next = null;
            return head;
        }
    }
    if (i===n){
        return head.next;
    }
    if (n===1){
        prev.next.next = null;
    }
    prev.next = prev.next.next;
    return head;
};