// Source : https://leetcode.com/problems/prefix-and-suffix-search/
// Author : avebeatrix
// Date   : 2022-06-18
/**
 * @param {string[]} words
 */
 var WordFilter = function (words) {

    this.dict = [...words];

    this.trie = {};

    let node_iterate = (node, letter) => {
        if (!node[letter]) {
            node[letter] = {};
        }
        node = node[letter];
        return node;
    }
    let node_finish = (node, j) => {
        if (!node.end) {
            node.end = {};                    
        }
        node.end.end = j;     
        node = node.end;
        return node;
    }

    words.forEach((word, j) => {

        let N = word.length;
        let letters = word.split('');

        for (let i = 0; i < N; i++) {
            let node = this.trie;
            for (let k = i; k < N; k++) {               
                node = node_iterate(node, word[k]);
            }

            node = node_finish(node, j);

            letters.forEach((letter) => {
                node = node_iterate(node, letter);             
                node = node_finish(node, j);              
            })
        }

    })
};

/** 
 * @param {string} prefix 
 * @param {string} suffix
 * @return {number}
 */
WordFilter.prototype.f = function (prefix, suffix) {
    let node = this.trie;   

    let iterate = (node, s, with_end) => {
        let N = s.length;
        for (let i = 0; i < N; i++) {
            if (!node[s[i]]) return -1;
            node = with_end ? node[s[i]].end : node[s[i]];
        }    
        node = node.end;
        if (node === undefined) return -1;
        return node;
    }  

    node = iterate(node, suffix, false);
    if (node === -1) return -1;

    node = iterate(node, prefix, true);
    if (node === -1) return -1;  
   
    return node;
};

/** 
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */
