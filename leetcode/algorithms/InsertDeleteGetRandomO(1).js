// Source : https://leetcode.com/problems/insert-delete-getrandom-o1/
// Author : avebeatrix
// Date   : 2021-12-15

var RandomizedSet = function () {
    this.set = new Set();
    this.arr = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.set.has(val)) {
        return false;
    }
    this.set.add(val);
    this.arr.push(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.set.has(val)) {
        this.set.delete(val);
        let index = this.arr.indexOf(val);
        if (index !== -1) {
            if (this.arr.length > 1) {
                [this.arr[index], this.arr[this.arr.length - 1]] = [this.arr[this.arr.length - 1], this.arr[index]];
            }
            this.arr.pop();
        }
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    let key = Math.floor(Math.random() * this.arr.length);
    return this.arr[key];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */