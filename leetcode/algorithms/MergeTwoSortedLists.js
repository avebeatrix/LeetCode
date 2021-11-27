// Source : https://leetcode.com/problems/merge-two-sorted-lists/
// Author : avebeatrix
// Date   : 2021-11-27
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (list1 === null && list2 === null) {
        return null;
    }
    if (list1 === null) {
        return list2;
    }
    if (list2 === null) {
        return list1;
    }
    let result = {};
    let head = result;
    while (list1 || list2) {
        result.val = Math.min(((list1?.val) ?? Infinity), ((list2?.val) ?? Infinity));
        if (((list1?.val) ?? Infinity) < ((list2?.val) ?? Infinity)) {
            list1 = list1.next;            
        } else {
            list2 = list2.next;           
        }
        if (list1 === null && list2 === null){
            result.next = null;
        }else{
            result.next = {}
            result = result.next;
        }        
    }   
    return head;
};