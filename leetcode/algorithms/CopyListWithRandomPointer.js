// Source : https://leetcode.com/problems/copy-list-with-random-pointer/
// Author : avebeatrix
// Date   : 2022-03-12
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    if (!head) return null;

    let getNode = (node) => {
        if (node === null) {
            return null;
        }
        if (node.copy) {
            return node.copy;
        }
        node.copy = {
            val: node.val, 
        }
        node.copy.next = getNode(node.next);
        node.copy.random = getNode(node.random);
        return node.copy;
    }

    head.copy = {
        val: head.val,        
    };
    head.copy.next = getNode(head.next);
    head.copy.random = getNode(head.random);
      
    return head.copy;
};
let node7 = {
    val: 7,
}
let node13 = {
    val: 13,
}
let node11 = {
    val: 11,
}
let node10 = {
    val: 10,
}
let node1 = {
    val: 1,
}
node7.next = node13;
node13.next = node11;
node11.next = node10;
node10.next = node1;
node1.next = null;

node7.random = null;
node13.random = node7;
node11.random = node1;
node10.random = node11;
node1.random = node7;
copyRandomList(node7);