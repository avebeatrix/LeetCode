// Source : https://leetcode.com/problems/implement-trie-prefix-tree/
// Author : avebeatrix
// Date   : 2022-01-28
class TrieNode {

    constructor(){
        this.links = [];  
        this.isEnd = false;      
    }

    containsKey(ch) {
        return this.links[ch] !== undefined;
    }
    get(ch) {
        return this.links[ch];
    }
    put(ch, node) {
        this.links[ch] = node;
    }
    setEnd() {
        this.isEnd = true;
    }   
}

var Trie = function() {
   
    this.root = new TrieNode();  
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    node = this.root;
    for (let i = 0; i < word.length; i++) {
        currentChar = word[i];
        if (!node.containsKey(currentChar)) {
            node.put(currentChar, new TrieNode());
        }
        node = node.get(currentChar);
    }
    node.setEnd();
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    node = this.searchPrefix(prefix);
    return node != null;    
};


/** 
 * @param {string} prefix
 * @return {boolean}
 */
 Trie.prototype.searchPrefix = function(prefix) {
    node = this.root;
    for (let i = 0; i < prefix.length; i++) {
        curLetter = prefix[i];
        if (node.containsKey(curLetter)) {
            node = node.get(curLetter);
        } else {
            return null;
        }
    }
    return node;
};


/** 
 * @param {string} word
 * @return {boolean}
 */
 Trie.prototype.search = function(word) {
    node = this.searchPrefix(word);
    return node != null && node.isEnd;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
