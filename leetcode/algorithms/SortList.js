// Source : https://leetcode.com/problems/sort-list/
// Author : avebeatrix
// Date   : 2022-02-24
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
var sortList = function (head) {
    if (!head) return null;
    let node = head.next;
    let length = 1;
    while (node) {
        node = node.next;
        length++;
    }
    let merge = (l_pointer, r_pointer) => {
        let merged_head;
        if (l_pointer.val > r_pointer.val) {
            merged_head = r_pointer;
            r_pointer = r_pointer.next;
        } else {
            merged_head = l_pointer;
            l_pointer = l_pointer.next;
        }
        let merged_node = merged_head;
        while (l_pointer !== null || r_pointer !== null) {
            if (!r_pointer) {
                merged_node.next = l_pointer;
                l_pointer = l_pointer.next;
            } else if (!l_pointer){
                merged_node.next = r_pointer;
                r_pointer = r_pointer.next;
            } else if (l_pointer.val > r_pointer.val) {
                merged_node.next = r_pointer;
                r_pointer = r_pointer.next;
            } else {
                merged_node.next = l_pointer;
                l_pointer = l_pointer.next;
            }
            merged_node = merged_node.next;
        }
        
        return merged_head;
    }
    let fastSort = (left, length) => {
        if (length > 2) {
            let length_half = Math.ceil(length / 2);
            let right = left;
            for (let i = 0; i < length_half; i++) {
                right = right.next;
            }
            let l1 = fastSort(left, length_half);
            let r1 = fastSort(right, length - length_half);         
           
            return merge(l1, r1);

        } else {
            if (length === 1) {
                left.next = null;
                return left;
            }
            let l1 = left
            let l2 = left.next;
            if (left.val > left.next.val) {
                left.next.next = left;
                l1 = left.next;
                l2 = left;
            }            
            l2.next = null;
            return l1;
        }

    }    
    return fastSort(head, length);
};