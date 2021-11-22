// Source : https://leetcode.com/problems/validate-binary-search-tree/
// Author : avebeatrix
// Date   : 2021-11-22
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
var isValidBST = function (root) {
    let result = true;
    let queue = [];
    let node = root;
    let min = (2 ** 31) * (-1) - 1;
    let max = 2 ** 31;

    while (true) {
        if (node.left !== null) {
            if (node.left.val >= node.val || node.left.val <= min) {
                result = false;
                break;
            } else {
                cur_left = node.left.val;
                queue.push([node.left, min, node.val]);
            }

        }
        if (node.right !== null) {
            if (node.right.val <= node.val || node.right.val >= max) {
                result = false;
                break;
            } else {
                cur_right = node.right.val;
                queue.push([node.right, node.val, max]);
            }
        }
        if (queue.length === 0) {
            break;
        }
        [node, min, max] = queue.pop();
    }
    return result;
};