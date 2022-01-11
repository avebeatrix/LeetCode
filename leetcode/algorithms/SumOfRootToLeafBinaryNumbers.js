// Source : https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/
// Author : avebeatrix
// Date   : 2022-01-11
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
 var sumRootToLeaf = function(root) {
    let numbers = [];
    let getStrNum = (node, str) => {
        str += node.val;
        if (node.left) {
            getStrNum(node.left, str);
        }
        if (node.right) {
            getStrNum(node.right, str);
        }
        if (!node.left && !node.right) {
            numbers.push(parseInt(str, 2));
        }
    }
    getStrNum(root, '');
    return numbers.reduce((acc, val) => acc += val, 0);
};