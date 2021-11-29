// Source : https://leetcode.com/problems/palindrome-linked-list/
// Author : avebeatrix
// Date   : 2021-11-29
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (head === null || head.next == null) return true;
    let length = 1;
    let node = head;
    while (node.next) {
        node = node.next;
        length++;
    }
    let half_pointer = Math.floor((length + 1) / 2) - 1;
    let reverseSecondHalf = (half_pointer) => {
        let node = head;
        let i = 0;
        let prev_node = node;
        let half_pointer_node = head;       
        let new_end = node;
        let next = node.next;
        while (next) {
            next = node.next;
            if (i === half_pointer) {
                half_pointer_node = node;
            }else if (i === half_pointer + 1) {
                new_end = node;
            }else if (i > half_pointer + 1) {
                node.next = prev_node;
            }
            prev_node = node;
            node = next;
            i++;
        }
        if (half_pointer_node!==head){
            half_pointer_node.next = prev_node;
            new_end.next = null;
        }           
    }
    reverseSecondHalf(half_pointer);
  
    let node1 = head;
    let node2 = head;
    let i = 0;
    while (node2.next) {
        if (i <= half_pointer) {
            node2 = node2.next;
        } else {
            if (node1.val !== node2.val) {
                reverseSecondHalf(half_pointer);
                return false;
            }
            node1 = node1.next;
            node2 = node2.next;
        }
        i++;
    }
    if (node1.val !== node2.val) {
        reverseSecondHalf(half_pointer);
        return false;
    }
    reverseSecondHalf(half_pointer);
    return true;
};