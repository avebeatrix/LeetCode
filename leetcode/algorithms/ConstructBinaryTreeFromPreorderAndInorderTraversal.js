// Source : https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
// Author : avebeatrix
// Date   : 2021-12-20

/**
 * Definition for a binary tree node. * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

/*
Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]
 */
var buildTree = function (preorder, inorder) {
    
    let inorderMap = new Map();
    for(let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }

    let preorder_index = 0;
    let arr_to_tree = (left, right) => {
        if (left > right) return null;
        let tmp = inorderMap.get(preorder[preorder_index]);
        let node = {
            val: preorder[preorder_index],
            left: null,
            right: null,
        }       
        preorder_index++;
        node.left = arr_to_tree(left, tmp-1);                      
        node.right = arr_to_tree(tmp+1, right);

        return node;
    }
    

    return arr_to_tree(0, preorder.length-1);
};