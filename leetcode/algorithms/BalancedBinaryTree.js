// Source : https://leetcode.com/problems/balanced-binary-tree/
// Author : avebeatrix
// Date   : 2022-03-20
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
var isBalanced = function (root) {
    if (!root) return true;
    let isBalanced = true;
    let countBalance = node => {
        if (!isBalanced) return;              
        if (!node.left && !node.right) {
            return 1;
        }
        let left_l = node.left ? countBalance(node.left) : 0;
        let right_l = node.right ? countBalance(node.right) : 0; 
        if (Math.abs(left_l - right_l) > 1) {
            isBalanced = false;          
        }
        return Math.max(left_l, right_l) + 1;
    }
    countBalance(root);
    return isBalanced;
};