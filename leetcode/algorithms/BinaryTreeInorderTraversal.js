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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let result = [];
    if (root) {
        let node = root;
        let queue = [];
        let visited = new Set();

        while (node) {
            if (!node.left || visited.has(node.left)) {
                result.push(node.val);
                visited.add(node);
            }
            if (node.right && node.right !== queue[queue.length - 1]) {
                queue.push(node.right);
            }

            if (node.left && !visited.has(node.left)) {
                queue.push(node);
                node = node.left;
            } else {
                if (queue.length) {
                    node = queue.pop();
                } else {
                    node = null;
                }

            }
        }
    }
    return result;
};