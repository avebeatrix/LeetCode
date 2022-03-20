// Source : https://leetcode.com/problems/same-tree/
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    let isSame = true;
    let check = (pNode, qNode) => {
        if (!isSame) return;
        if (!pNode && !qNode) return;
        if (pNode?.val !== qNode?.val) {
            isSame = false;
            return;
        }
        check(pNode.left, qNode.left);
        check(pNode.right, qNode.right);
    }
    check(p, q);
    return isSame;
};