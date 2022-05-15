// Source : https://leetcode.com/problems/deepest-leaves-sum/
// Author : avebeatrix
// Date   : 2022-05-15
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
 var deepestLeavesSum = function(root) {
    let cur_level = 0;
    let queue = [root];
    if (!root) return 0;
    let sum = root.val;
    let new_queue = [];
    while (queue.length) {
        let node = queue.pop();
        if (node.left) {
            new_queue.push(node.left);
        }
        if (node.right) {
            new_queue.push(node.right);
        }
        if (!queue.length) {
            cur_level++;
            queue = new_queue;
            let new_sum = new_queue.reduce((acc, node) => acc += node.val, 0);
            sum = new_sum || sum;
            new_queue = [];
        }
    }
    
    return sum;
};