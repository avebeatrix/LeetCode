// Source : https://leetcode.com/problems/binary-tree-level-order-traversal/
// Author : avebeatrix
// Date   : 2021-11-27
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    let result = [[root.val]];
    let queue = [[root.left, root.right]];
    let i = 0;
    let limit = queue.length;
    while (i < queue.length) {
        let level_array = [];
        while (i < limit) {
            let [left_node, right_node] = queue[i];
            if (left_node) {
                level_array.push(left_node.val);
                queue.push([left_node.left, left_node.right]);
            }
            if (right_node) {
                level_array.push(right_node.val);
                queue.push([right_node.left, right_node.right]);
            }
            i++;
        }
        if (level_array.length) {
            result.push(level_array);
        }
        limit = queue.length;
    }

    return result;
};