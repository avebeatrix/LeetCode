// Source : https://leetcode.com/problems/design-add-and-search-words-data-structure/
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

var WordDictionary = function() {
    this.root = new TrieNode();  
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
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
 WordDictionary.prototype.searchPrefix = function(prefix) {
    nodes = [this.root];
    
    for (let i = 0; i < prefix.length; i++) {
        let newNodes = [];
        curLetter = prefix[i];
        
        nodes.forEach(node => {
            
            if (curLetter === '.'){               
                Object.keys(node.links).forEach(key => {                   
                    newNodes.push(node.links[key]);
                })               
            } else if (node.containsKey(curLetter)) {
                newNodes.push(node.get(curLetter));
            } 
        })
        nodes = newNodes;
        if (!nodes.length) break;
    }
    return nodes;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    nodes = this.searchPrefix(word);
    if (!nodes.length) return false;
    for(let i = 0; i < nodes.length; i++) {       
        if (nodes[i].isEnd) return true;
    }
    return false;
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */