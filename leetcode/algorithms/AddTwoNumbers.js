// Source : https://leetcode.com/problems/add-two-numbers/
// Author : avebeatrix
// Date   : 2021-12-06
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let head = {}
    let node = head;
    let prev = node;
    let add = 0;
    while (true) {
        if (!l1 && !l2 && !add) break;
        let digit1 = l1?.val ?? 0;
        let digit2 = l2?.val ?? 0;
        let sum = digit1 + digit2 + add;        
        if (sum > 9){
            node.val = sum % 10;
            add = 1;
        }else{
            node.val = sum;
            add = 0;
        }
        if (l1){
            l1 = l1.next;
        }
        if (l2){
            l2 = l2.next;
        }
        prev = node;
        node.next = {};
        node = node.next;
    }    
    prev.next = null;
    return head;
};
let l1 = {
    val:9,
    next:{
        val:9,
        next:{
            val:9,
            next:{
                val:9,
                next:{
                    val:9,
                    next:{
                        val:9,
                        next:{
                            val:9,
                            next:null
                        }
                    }
                }
            }
        }
    }
}
let l2 = {
    val:9,
    next:{
        val:9,
        next:{
            val:9,
            next:{
                val:9,
                next:null
            }
        }
    }
}
let d = addTwoNumbers(l1,l2);
let k;