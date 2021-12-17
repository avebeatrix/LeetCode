// Source : https://leetcode.com/problems/intersection-of-two-linked-lists/
// Author : avebeatrix
// Date   : 2021-12-17
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let countLength = node => {
        let L = 0;
        while (node) {
            L++;
            node = node.next;
        }
        return L;
    }
    let getNodeByNum = (node, num) => {
        for (let i = 0; i < num; i++) {
            node = node.next;
        }
        return node;
    }
    let m = countLength(headA);
    let n = countLength(headB);
    if (!m || !n) return null;
    let diff = Math.abs(m - n);
    let nodePointerA = m > n ? getNodeByNum(headA, diff) : headA;
    let nodePointerB = m < n ? getNodeByNum(headB, diff) : headB;

    while (nodePointerA && nodePointerB) {
        if (nodePointerA === nodePointerB) {
            return nodePointerA;
        }
        nodePointerA = nodePointerA.next;
        nodePointerB = nodePointerB.next;
    }
    return null;
};