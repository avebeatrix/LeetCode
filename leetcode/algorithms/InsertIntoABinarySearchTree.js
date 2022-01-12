// Source : https://leetcode.com/problems/insert-into-a-binary-search-tree/
// Author : avebeatrix
// Date   : 2022-01-12
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    if (!root) {
        return {
            val: val,
            left: null,
            right: null
        }
    }
    let node = root;
    while (node) {
        if (val > node.val) {
            if (node.right) {
                node = node.right;
            } else {
                node.right = {
                    val: val,
                    left: null,
                    right: null,
                }
                break;
            }
        } else {
            if (node.left) {
                node = node.left;
            } else {
                node.left = {
                    val: val,
                    left: null,
                    right: null,
                }
                break;
            }
        }
    }
    return root;
};
