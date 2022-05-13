// Source : https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
// Author : avebeatrix
// Date   : 2022-05-13
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/* not good */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {

    let curRight = null;
    let prevCurRight = false;

    let getRightOnLevel = (node, cur_level, target_level, target_node) => {
        if (!node || prevCurRight !== false) return;
        if (cur_level === target_level) {                       
            if (cur_level){
                if (target_node === node) {
                    prevCurRight = curRight;  
                }
                curRight = node;
            }
            return;
        }
        getRightOnLevel(node?.left, cur_level + 1, target_level, target_node);
        getRightOnLevel(node?.right, cur_level + 1, target_level, target_node);
    }

    let bfs = (node, level, left = null) => {
        if (!node) return;
        if (left) {
            left.next = node;
        } else {
            curRight = null;
            prevCurRight = false;
            getRightOnLevel(root, 0, level, node);

            if (prevCurRight && prevCurRight != node) {
                prevCurRight.next = node;
            }
        }
        
        bfs(node?.left, level + 1);
        bfs(node?.right, level + 1, node?.left);
    }
    bfs(root, 0, null);

    let node = root;
    while (node) {
        node.next = null;
        if (node.right) {
            node = node.right;
        } else {
            node = node.left;
        }
    }
    return root;
};