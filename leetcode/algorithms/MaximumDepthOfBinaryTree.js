// Source : https://leetcode.com/problems/maximum-depth-of-binary-tree/
// Author : avebeatrix
// Date   : 2021-11-18

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
var maxDepth = function (root) {
    let result = 0;
    let getLevel = (node, level) => {
        if (node.left) {
            f_queue.push(() => getLevel(node.left, level + 1));
        }
        if (node.right) {
            f_queue.push(() => getLevel(node.right, level + 1));
        }
        result = Math.max(level, result);
    }
    if (root === null) return 0;
    let f_queue = [() => getLevel(root, 1)];
    for (let i = 0; i < f_queue.length; i++) {
        f_queue[i]();
    }
    return result;
};