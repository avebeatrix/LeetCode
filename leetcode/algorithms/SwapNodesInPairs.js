// Source : https://leetcode.com/problems/swap-nodes-in-pairs/
// Author : avebeatrix
// Date   : 2022-02-16
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
var swapPairs = function (head) {
    let new_head = false;
    if (head) {
        let node = head;
        let prev = false;
        while (node) {
            let start = node;
            let middle = node.next;
            if (!middle) {
                break;
            }

            let end = middle.next;
            middle.next = start;
            if (!new_head) {
                new_head = middle;
            }
            start.next = end;
            if (prev) {
                prev.next =  middle;
            }
            prev = start;        
            node = end;
        }
    }
    if (new_head) {
        return new_head;
    }
    return head;
};