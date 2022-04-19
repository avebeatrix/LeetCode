// Source : https://leetcode.com/problems/recover-binary-search-tree/
// Author : avebeatrix
// Date   : 2022-04-19
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*morris 0(1) memory*/
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var recoverTree = function(root) {
    let [cur, node, cands] = [root, {val: -Infinity, left: null, right: null}, []];
    let pre;
    while (cur){   
        if (cur.left){
            pre = cur.left;
            while (pre.right && pre.right != cur){
                pre = pre.right;
            }
            if (!pre.right){
                pre.right = cur;
                cur = cur.left;
            }else{
                pre.right = null;
                if (cur.val < node.val){
                    cands.push(node, cur);
                }
                node = cur;
                cur = cur.right;
            }
        }else{
            if (cur.val < node.val){
                cands.push(node, cur);
            }                
            node = cur;
            cur = cur.right;
        }
    }
    let tmp = cands[cands.length - 1].val;
    cands[cands.length - 1].val = cands[0].val;
    cands[0].val = tmp;    
};