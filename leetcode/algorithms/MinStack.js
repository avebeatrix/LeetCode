// Source : https://leetcode.com/problems/min-stack/
// Author : avebeatrix
// Date   : 2021-11-24
var MinStack = function() {
    this.min = Infinity;
    this.node = {
        val: Infinity,
        next: null,
        prev: null,
    };   
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.node.next = {
        val,
        next: null,
        prev: this.node,
    }
    this.node = this.node.next;
    this.min = Math.min(val, this.min);   
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.node = this.node.prev;
    this.node.next = null;
    this.min = this.node.val;

    let search_node = this.node;
    while(search_node.prev!==null){
        this.min = Math.min(this.min, search_node.val);
        search_node = search_node.prev;
    }   
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.node.val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */