// Source : https://leetcode.com/problems/shuffle-an-array/
// Author : avebeatrix
// Date   : 2021-11-19

/**
 * @param {number[]} nums
 */
 var Solution = function(nums) {
    this.original_nums = nums.slice();
    this.current = nums.slice();
    this.length = nums.length;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.original_nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    for (let i = this.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));     
        [this.current[i], this.current[j]] = [this.current[j], this.current[i]];
    }
    return this.current;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */