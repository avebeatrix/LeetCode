// Source : https://leetcode.com/problems/prefix-and-suffix-search/
// Author : avebeatrix
// Date   : 2022-06-19
/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
    products.sort();

    let trie = {};
    for (let p of products) {
        let root = trie;
        for (let i = 0; i < p.length; i++) {
            if (!root[p[i]]) root[p[i]] = { 'sug': [] };
            if (root[p[i]]['sug'].length < 3) root[p[i]]['sug'].push(p);
            root = root[p[i]];
        }
    }

    let root = trie, res = [];
    for (let i = 0; i < searchWord.length; i++) {
        if (root) root = root[searchWord[i]];
        res.push(!root ? [] : root['sug']);
    }

    return res;
};