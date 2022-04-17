// Source : https://leetcode.com/problems/increasing-order-search-tree/
// Author : avebeatrix
// Date   : 2022-04-17
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
 * @return {TreeNode}
 */
 var increasingBST = function(root) {
     if (!root) return root;
    let new_root = null;
    let cur = null;
    let traverse = (node) => {
        if (node.left) {
            traverse(node.left);
            cur.right = node;
            cur = cur.right;
            cur.left = null;
            if (node.right) {
                traverse(node.right);
            }
        } else {
            if (!new_root) {
                new_root = node;
                cur = node;
                cur.left = null;
            } else {
                cur.right = node;
                cur = cur.right;
                cur.left = null;
            }  
            if (node.right) {              
                traverse(node.right);
            }                      
        }        
    }
    traverse(root);
    return new_root;
};