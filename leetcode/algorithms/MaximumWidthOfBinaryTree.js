// Source : https://leetcode.com/problems/maximum-width-of-binary-tree/
// Author : avebeatrix
// Date   : 2022-02-27
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
var widthOfBinaryTree = function (root) {
    let max_width = 1n;
    let queue = [[root, 1n]];
    let new_queue = [];   
    let pointer = 0;   
    while (pointer < queue.length) {
        let [node, index] = queue[pointer];
      
        new_queue.push([node.left, index*2n]);      
        new_queue.push([node.right, index*2n + 1n]);

        pointer++;

        if (pointer >= queue.length) {                           
            let start = false;
            let tmp_queue = [];
            for(let q of new_queue) {
                if (q[0] !== null) {
                    start = true;
                }
                if (start) {
                    tmp_queue.push(q);
                }
            }            
            while (tmp_queue.length && tmp_queue[tmp_queue.length - 1][0] === null) {
                tmp_queue.pop();
            }
            if (!tmp_queue.length) break;
                                
            let new_width = tmp_queue[tmp_queue.length - 1][1] - tmp_queue[0][1] + 1n;
            max_width = max_width > new_width ? max_width : new_width;
                                    
            queue = tmp_queue.filter(val => val[0] !== null);
            new_queue = []; 
            pointer = 0;             
        }
    }
    return Number(max_width);
};