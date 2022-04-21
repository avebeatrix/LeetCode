// Source : https://leetcode.com/problems/design-hashset/
// Author : avebeatrix
// Date   : 2022-04-21

var MyHashSet = function() {
    this.arr = Array(1000);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    let new_key = key % 1000;
    if (this.contains(key)) return;
    if (!this.arr[new_key]) {
        this.arr[new_key] = [];
    }
    this.arr[new_key].push(key);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    if (!this.contains(key)) return;
    let new_key = key % 1000;
    let index = this.arr[new_key].findIndex(val => val === key);
    this.arr[new_key].splice(index, 1);
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    let new_key = key % 1000;
    if (!this.arr[new_key]?.length) {
        return false;
    }
    if (this.arr[new_key].filter((val, i) => val === key).length) return true;
    return false;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */