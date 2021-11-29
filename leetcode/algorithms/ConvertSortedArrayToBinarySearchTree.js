// Source : https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
// Author : avebeatrix
// Date   : 2021-11-29
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    let half = Math.floor((nums.length) / 2);
    
    let createNode = (val) => ({ val: val, left: null, right: null });

    let root = createNode(nums[half]);

    let setChild = (left_limit, right_limit, node, type = 'LEFT') => {
        let half = Math.floor((left_limit + right_limit) / 2);
        if (half > left_limit) {
            if (type === 'LEFT') {
                node.left = createNode(nums[half]);
                node = node.left;
            } else {
                node.right = createNode(nums[half]);
                node = node.right;
            }

            setChild(left_limit, half - 1, node, 'LEFT');
            setChild(half + 1, right_limit, node, 'RIGHT');
        } else {
            if (left_limit === right_limit) {
                if (type === 'LEFT') {
                    node.left = createNode(nums[left_limit]);
                    node = node.left;
                } else {
                    node.right = createNode(nums[left_limit]);
                    node = node.right;
                }
            } else {
                if (type === 'LEFT') {
                    node.left = createNode(nums[right_limit]);
                    node.left.left = createNode(nums[left_limit]);
                } else {
                    node.right = createNode(nums[left_limit]);
                    node.right.right = createNode(nums[right_limit]);
                }
            }
        }
    }
    if (nums.length > 1) {
        setChild(0, half - 1, root, 'LEFT');
        if (nums.length > 2) {
            setChild(half + 1, nums.length - 1, root, 'RIGHT');
        }
    }

    return root;
};
let d = sortedArrayToBST([1, 3]);
let k;