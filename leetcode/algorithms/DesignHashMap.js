// Source : https://leetcode.com/problems/design-hashmap/
// Author : avebeatrix
// Date   : 2022-04-22

var MyHashMap = function() {
    this.store = {};
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {      
    this.store[key] = value;    
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {    
    if (Number.isInteger(this.store[key])) return this.store[key]; 
    return -1;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {          
    delete this.store[key];       
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */