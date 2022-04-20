// Source : https://leetcode.com/problems/binary-search-tree-iterator/
// Author : avebeatrix
// Date   : 2022-04-20
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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
 var BSTIterator = function(root) {
    this.root = root;  
    this.curr = root;      
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    let curr = this.curr;
    let pre;
    while (curr != null) {
        if (curr.left == null) {     
            let res = curr.val;
            this.curr = curr.right; // move to next right node  
            return res;  
            
        } else { // has a left subtree
            pre = curr.left;
            while (pre.right != null) { // find rightmost
                pre = pre.right;
            }
            pre.right = curr; // put cur after the pre node
            let temp = curr; // store cur node
            curr = curr.left; // move cur to the top of the new tree
            temp.left = null; // original cur left be null, avoid infinite loops
        }
    }
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.curr !== null
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */