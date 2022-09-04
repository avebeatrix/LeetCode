// Source : https://leetcode.com/problems/serialize-and-deserialize-bst/
// Author : avebeatrix
// Date   : 2022-09-04
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
    if (!root) {
         return '';
    }
    let result = '';   
    let addNode = (node) => {
        result += node.val;
        if (node.left) {
            result += 'L';
            addNode(node.left);
        }
        if (node.right) {
            result += 'R';
            addNode(node.right);
        }
        result += 'U';
    }
    addNode(root);
    return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (!data) {
        return null;
    }
    let val = parseInt(data);
    let tree = {
        val: val,
        left: null,
        right: null,
    }
    let pointer = val.toString().length;  
    let node = tree;
    let stack = [node];
    while (pointer < data.length) {
        node = stack[stack.length - 1];
        if (data[pointer] === 'L') {            
            pointer++;
            let val = parseInt(data.slice([pointer]));
            node.left = {
                val:val,
                left: null,
                right: null,
            }
            node = node.left;
            stack.push(node);   
            pointer += val.toString().length;            
        } else if (data[pointer] === 'R') {
            pointer++;
            let val = parseInt(data.slice([pointer]));
            node.right = {
                val: val,
                left: null,
                right: null,
            }
            node = node.right;
            stack.push(node);   
            pointer += val.toString().length;              
        } else if (data[pointer] === 'U') {
            stack.pop();
            pointer++;    
        }         
    }
    return tree;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

let tree = deserialize('1L2L4UUR3R5UUU');
console.log(serialize(tree));