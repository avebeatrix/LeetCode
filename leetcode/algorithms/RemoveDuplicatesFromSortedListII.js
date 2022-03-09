// Source : https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
// Author : avebeatrix
// Date   : 2022-03-09
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
 var deleteDuplicates = function(head) {
    if (!head || !head.next) return head;
    
    let node = head;
    let left_pointer = node;
    let right_pointer = node.next;
    let prev = null;

    while (left_pointer) {
        if (right_pointer && right_pointer.val === left_pointer.val) {
            while (right_pointer && right_pointer.val === left_pointer.val) {
                right_pointer = right_pointer.next;
            }        
            if (!prev) {
                head = right_pointer;
                if (!head) return head;
            }             
            left_pointer = right_pointer;
            if (!left_pointer){
                prev.next = null;
                return head;
            }     
            right_pointer = left_pointer.next;
            continue;                           
        }        
        if (!right_pointer){
            if (!prev) {
                head = left_pointer;                
            } else {
                prev.next = left_pointer;
            }            
            prev = left_pointer;
            left_pointer = left_pointer.next;            
            if (!left_pointer) break;
            right_pointer = left_pointer.next;
            continue;
        };
                
        right_pointer = right_pointer.next;
    }

    return head;
};