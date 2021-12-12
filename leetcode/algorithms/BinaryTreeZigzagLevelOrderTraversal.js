// Source : https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
// Author : avebeatrix
// Date   : 2021-12-12
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
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    let queue = [root];
    let result = [[root.val]];
    let is_RTL = true;

    let new_queue = [];
    while (queue.length) {
        let add_to_res = [];      
        while (queue.length) {
            let node = queue.pop();  
            
            if (is_RTL){                               

                if (node.right){
                    new_queue.push(node.right);
                    add_to_res.push(node.right.val);
                }
                if (node.left){
                    new_queue.push(node.left);
                    add_to_res.push(node.left.val);
                }                             
                
            } else {
                if (node.left){
                    new_queue.push(node.left);
                    add_to_res.push(node.left.val);
                }
                if (node.right){
                    new_queue.push(node.right);
                    add_to_res.push(node.right.val);
                }                
                   
            }            
        }
        if (add_to_res.length){
            result.push(add_to_res);
        } 
        queue = new_queue;
        new_queue = [];
        is_RTL = !is_RTL; 
    }   
    return result;
};