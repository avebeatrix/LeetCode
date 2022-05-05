// Source : https://leetcode.com/problems/implement-stack-using-queues/
// Author : avebeatrix
// Date   : 2022-05-05

var Queue = function() {
    this.queue = null;
}

Queue.prototype.push = function(x) {
    let tail = this.queue;
    let el = {
        val: x,
        next: null
    }
    if (!tail) {
        this.queue = el;
        return;
    }
    while(tail.next) {
        tail = tail.next;
    }
    tail.next = el;
    return;
}
Queue.prototype.pop = function(x) {
    let root = this.queue;
    this.queue = this.queue.next;
    return root.val;
}
Queue.prototype.peek = function(x) {
    return this.queue;
}
Queue.prototype.size = function() {
    let size = 1;
    let tail = this.queue;   
    if (!tail) {
        return 0;
    }
    while(tail.next) {
        tail = tail.next;
        size++;
    }
    return size;
}
Queue.prototype.empty = function() {
    return this.queue ? false : true;
}

var MyStack = function() {
    this.stack = new Queue();
}
/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    if (this.empty()){
        this.stack = new Queue();
        this.stack.push(x);
    } else {
        let prev_length = this.stack.size();
        this.stack.push(x);
        while (prev_length > 0) {      
            let popped = this.stack.pop();    
            this.stack.push(popped)
            prev_length--;
        }
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.stack.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.stack.peek().val;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {   
    return this.stack.empty();
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */