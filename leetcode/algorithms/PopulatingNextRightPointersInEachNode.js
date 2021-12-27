// Source : https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
// Author : avebeatrix
// Date   : 2021-11-27
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (!root) return root;

    root.next = null;
    let queue = [root];

    while (queue.length) {
        let node = queue.pop();

        if (node.left) {
            queue.push(node.left);
            queue.push(node.right);

            node.left.next = node.right;

            let deep_left = node.left.right;
            let deep_right = node.right.left;
            while (deep_left) {
                deep_left.next = deep_right;
                deep_left = deep_left.right;
                deep_right = deep_right.left;
            }            
        }
    }

    let node = root.right;
    while (node) {
        node.next = null;
        node = node.right;
    }

    return root;
};