// Source : https://leetcode.com/problems/odd-even-linked-list/
// Author : avebeatrix
// Date   : 2021-12-12
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
var oddEvenList = function (head) {

    if (!head || !head.next || !head.next.next) {
        return head;
    }

    let even_head = head.next;
    let even_node = even_head;
   
    let node = head;
    let odd_node = node;

    while (node?.next?.next) {
        odd_node = node.next.next;
        even_node.next = node.next.next?.next || null;
        even_node = even_node.next;
        node.next = odd_node;
        node = node.next;
    }
    node.next = even_head;
    if (even_node){
        even_node.next = null;
    }
    
    return head;
};