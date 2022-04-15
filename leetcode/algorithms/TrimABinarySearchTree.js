// Source : https://leetcode.com/problems/trim-a-binary-search-tree/
// Author : avebeatrix
// Date   : 2022-04-15
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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low = -Infinity, high = Infinity) {
    let new_root = null;
    let traverse = (node) => {
        if (!node) return;
        if (node.val >= low && node.val <= high && !new_root) {
            new_root = node;
        }
        if (node.left && node.left.val < low) {
            if (node.left.right) {
                node.left = node.left.right;
                traverse(node);                
            } else {
                node.left = null;
            }
        } else {
            traverse(node.left);
        }
        if (node.right && node.right.val > high) {
            if (node.right.left) {
                node.right = node.right.left;
                traverse(node);
            } else {
                node.right = null;
            }
        } else {
            traverse(node.right);
        }
    }   
    traverse(root);    
    
    return new_root;
};