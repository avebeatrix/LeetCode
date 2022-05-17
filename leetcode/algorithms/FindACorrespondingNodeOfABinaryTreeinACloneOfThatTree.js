// Source : https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/
// Author : avebeatrix
// Date   : 2022-05-17
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
    let path_to_target = '';
    let getPath = (node, path) => {
        if (path_to_target) return;
        if (node === target) {
            path_to_target = path;
            return;
        }
        if (node.left) {
            getPath(node.left, path + 'L');
        }
        if (node.right) {
            getPath(node.right, path + 'R');
        }
    }
    getPath(original, '');
    let cloned_target = cloned;
    if (path_to_target.length) {
        path_to_target = path_to_target.split('').reverse();
        while (path_to_target.length) {
            let step = path_to_target.pop();
            cloned_target = step === 'L' ? cloned_target.left : cloned_target.right;
        }
    }
    
    return cloned_target;
};