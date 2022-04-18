// Source : https://leetcode.com/problems/kth-smallest-element-in-a-bst/
// Author : avebeatrix
// Date   : 2022-04-18
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
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
    let num = 0;
    let target = null;
    let traverse = (node) => {
        if (target) return;
        if (!node) return;
        if (node.left) {
            traverse(node.left);
        }
        num++;
        if (num === k) target =  node.val;
        if (node.right) {
            traverse(node.right);
        }
    }
    traverse(root);
    return target;
};