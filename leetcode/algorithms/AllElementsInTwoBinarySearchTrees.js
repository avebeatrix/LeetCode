// Source : https://leetcode.com/problems/all-elements-in-two-binary-search-trees/
// Author : avebeatrix
// Date   : 2022-01-26
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
    let arr = [];
    let node1 = root1;
    let node2 = root2;
    let arr1 = [];
    let arr2 = [];

    let traverse = (node, arr) => {
        if (node) {
            if (node.left) {
                traverse(node.left, arr);
            }
            arr.push(node.val);
            if (node.right) {
                traverse(node.right, arr);
            }
        }
    }

    traverse(node1, arr1);
    traverse(node2, arr2);
    arr = arr1.concat(arr2);
    arr.sort((a, b) => a - b);
    return arr;
};