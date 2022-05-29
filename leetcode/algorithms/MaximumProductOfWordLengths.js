// Source : https://leetcode.com/problems/maximum-product-of-word-lengths/
// Author : avebeatrix
// Date   : 2022-05-29
/**
 * @param {string[]} words
 * @return {number}
 */
 var maxProduct = function(words) {
    let binary_words = [];
    let a_code = 'a'.charCodeAt(0);
    words.forEach(word => {
        let binary_word = 0;
        [...(new Set(word))].forEach(letter => {
            binary_word |= parseInt('1' + '0'.repeat(letter.charCodeAt(0) - a_code), 2);
        })
        binary_words.push(binary_word);
    })
    let N = words.length;
    let max = 0;
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            if ((binary_words[i] | binary_words[j]) === (binary_words[i] ^ binary_words[j])) {
                max = Math.max(max, words[i].length * words[j].length);
            }
        }
    }
    return max;
};