// Source : https://leetcode.com/problems/binary-tree-cameras/
// Author : avebeatrix
// Date   : 2022-06-17
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
 * @return {number}
 */
var minCameraCover = function (root) {
    if (root && !root.left && !root.right) return 1;
    let state = new Set();
    let counter = 0;
    let traverse = (node, parent) => {
        if (node.left) {
            traverse(node.left, node);
        }
        if (node.right) {
            traverse(node.right, node);
        }
        if (!state.has(node)) {
            if ((node.left && state.has(node.left) || node.right && state.has(node.right)) || parent && state.has(parent)) {
                return;
            }
            if (parent && !state.has(parent) || (
                node.left && !state.has(node.left) || node.right && !state.has(node.right)
            )) {
                state.add(parent);
                state.add(node);
                counter++;
                return;
            }           
        }
    }
    traverse(root, null);
    return counter;
};