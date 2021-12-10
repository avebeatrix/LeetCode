// Source : https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
// Author : avebeatrix
// Date   : 2021-12-10
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
var serialize = function (root) {
    //simple solution:
    //return JSON.stringify(root);
    if (!root) {
        return '';
    }
    let result = [];

    let node = root;
    let queue = [];

    while (true) {
        result.push(node?.val ?? null);
        if (node) {
            queue.push(node.right);
            queue.push(node.left);
        }

        if (!queue.length) break;

        node = queue.pop();
    }

    return result.join();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    //simple solution:
    //return JSON.parse(data);
    if (!data.length) {
        return null;
    }
    let arr = data.split(',').map(val => {
        if (val === '') return null;
        return parseInt(val);
    });

    let root = {
        val: arr[0]
    }
    let node = root;
    let queue = [node];

    for (let i = 1; i < arr.length; i++) {
        while (node) {
            if (node.left === undefined) {
                if (arr[i] === null) {
                    node.left = null;
                } else {
                    node.left = {
                        val: arr[i]
                    }
                    node = node.left;
                    queue.push(node);
                }
                break;
            } else if (node.right === undefined) {
                if (arr[i] === null) {
                    node.right = null;                    
                    node = queue.pop();
                } else {
                    queue.push(node);
                    node.right = {
                        val: arr[i]
                    }
                    node = node.right;
                    queue.push(node);
                }
                break;
            } else {
                node = queue.pop();
            }
        }
    }


    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
