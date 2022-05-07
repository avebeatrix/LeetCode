// Source : https://leetcode.com/problems/132-pattern/submissions/
// Author : avebeatrix
// Date   : 2022-05-07
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
    let s3 = -Infinity;
    let st = [];
    for( let i = nums.length-1; i >= 0; i-- ){
        if( nums[i] < s3 ) return true;
        else while( st.length && nums[i] > st[st.length - 1] ){ 
            s3 = st.pop()
        }
        st.push(nums[i]);
    }
    return false;
};