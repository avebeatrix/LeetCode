// Source : https://leetcode.com/problems/symmetric-tree/
// Author : avebeatrix
// Date   : 2021-11-26
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {

    if (root.left === null && root.right === null) {
        return true;
    }
    if (root.left === null || root.right === null) {
        return false;
    }
    let queue = [[root.left, root.right]];
    while (queue.length) {
        let [left_node, right_node] = queue.pop();
        if (left_node.val !== right_node.val ||
            left_node.left !== null && right_node.right === null || left_node.left === null && right_node.right !== null ||
            left_node.right !== null && right_node.left === null || left_node.right === null && right_node.left !== null
        ) {
            return false;
        }

        if (left_node.left !== null && right_node.right !== null) {
            queue.push([left_node.left, right_node.right]);
        }
        if (left_node.right !== null && right_node.left !== null) {
            queue.push([left_node.right, right_node.left]);
        }
    }
    return true;
};