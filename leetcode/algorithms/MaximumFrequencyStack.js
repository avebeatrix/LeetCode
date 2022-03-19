// Source : https://leetcode.com/problems/maximum-frequency-stack/
// Author : avebeatrix
// Date   : 2022-03-19

/*solution: Stack of Stacks */

var FreqStack = function () {
    this.freq = new Map();
    this.group = new Map();
    this.maxfreq = 0;
}

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (x) {

    let f = (this.freq.get(x) || 0) + 1;
    this.freq.set(x, f);
    if (f > this.maxfreq) {
        this.maxfreq = f;
    }
    if (!this.group.has(f)) {
        this.group.set(f, []);
    }
    this.group.get(f).push(x)

};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
    x = this.group.get(this.maxfreq).pop();

    this.freq.set(x, this.freq.get(x) - 1);

    if (!this.group.get(this.maxfreq).length) {
        this.maxfreq -= 1;
    }
    return x;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
