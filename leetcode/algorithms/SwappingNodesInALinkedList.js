// Source : https://leetcode.com/problems/swapping-nodes-in-a-linked-list/
// Author : avebeatrix
// Date   : 2022-04-04
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
var swapNodes = function (head, k) {
    let prev_left = head;
    let prev_right = head;
    let node = head;
    let counter = 1;

    let swap = (n1, n2) => {
        let tmp = n1;
        n1 = n2;
        n2 = tmp;  
        return [n1, n2];      
    }
    while (node) {
        if (counter === k - 1) {
            prev_left = node;
        }
        if (counter > k + 1) {
            prev_right = prev_right.next;
        }
        node = node.next;
        counter++;
    }

    if (counter > 2) {        
        if (prev_right === prev_left && counter > 3) {
            return head;
        }
        if (k > Math.floor(counter / 2)) {
            [prev_left, prev_right] = swap(prev_left, prev_right);  
        }
        if (head === prev_right) {
            if (prev_right === prev_left) {
                let tmp = head;
                head = head.next;
                tmp.next = null;
                head.next = tmp;
                return head;
            }
        }
        if (k === 1 || k === counter - 1) {
            let tmp = head;
            head = prev_right.next;  
            prev_right.next.next = tmp.next;          
            tmp.next = null; 
            prev_right.next = tmp;                  
            return head;
        }
                     
        let isAdjacent = prev_right === prev_left.next;
        let right = prev_right.next;
        let left = prev_left.next;
        let newRightNext = right?.next || null;  
        let newLeftNext = left?.next || null;
        prev_left.next = right;
        if (isAdjacent) {                                      
            right.next = left;
            left.next = newRightNext;            
        }  else {
            prev_right.next = left;            
            right.next = newLeftNext;
        }                   
        
        left.next = newRightNext;
    }

    return head;
};