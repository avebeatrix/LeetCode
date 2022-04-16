// Source : https://leetcode.com/problems/convert-bst-to-greater-tree/
// Author : avebeatrix
// Date   : 2022-04-16
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/* to-do for O(1) for memory use Morris*/
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
    let sum = 0;
    let traverse = (node) => {
        if (!node) return 0;

        if (node.right) {
            traverse(node.right);
        }
        node.val += sum;
        sum = node.val;
        if (node.left) {
            traverse(node.left);
        } 
        return sum;
    }
    traverse(root);
    return root;
};