// Source : https://leetcode.com/problems/implement-strstr/
// Author : avebeatrix
// Date   : 2021-12-01
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle === '') {
        return 0;
    }
    let haystack_pointer = 0;
    let needle_pointer = 0;
    let haystack_length = haystack.length;
    let needle_length = needle.length;
    for (let i = 0; i < haystack_length; i++) {
        if (haystack[i] === needle[needle_pointer]) {
            if (needle_pointer === 0) {
                haystack_pointer = i;
            }
            needle_pointer++;
            if (needle_pointer === needle_length) {
                return haystack_pointer;
            }
        } else {
            if (needle_pointer > 0) {
                needle_pointer = 0;
                i = haystack_pointer;
            }
        }
    }
    if (needle_pointer === needle_length) {
        return haystack_pointer;
    }
    return -1;
};