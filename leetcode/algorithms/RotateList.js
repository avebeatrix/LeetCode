// Source : https://leetcode.com/problems/rotate-list/
// Author : avebeatrix
// Date   : 2022-03-11
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {   
    let length = 0;
    let node = head;
    while (node) {
        length++;
        node = node.next;
    }   
    let start_num = length - (k % length);    
    let index = 0;
    let new_head = head;
    let last_node;
    if (length < 2 || start_num === length) return head;
    node = head;
    let end;    
    while (node) {
        let next = node.next;       
        if (index === start_num) {
            end = last_node;
            new_head = node;
        }
        last_node = node;
        node = next;
        index++;
    }
    end.next = null;
    last_node.next = head;
    return new_head;
};