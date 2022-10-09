// Source : https://leetcode.com/problems/iterator-for-combination/
// Author : avebeatrix
// Date   : 2022-09-10
/**
 * @param {string} characters
 * @param {number} combinationLength
 */
 var CombinationIterator = function(characters, combinationLength) {
    this.characters = characters;
    this.charactersLength = characters.length;
    this.combinationLength = combinationLength;
    this.bitMask = parseInt('1'.repeat(combinationLength) + '0'.repeat(characters.length - combinationLength), 2);
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
    const result = this.characters.split('').filter((char, i) => {
        if (this.bitMask === (this.bitMask | 1 << (this.charactersLength - i - 1))) {
            return true;
        }
        return false;
    })
    let inString = this.bitMask.toString(2);
    inString = '0'.repeat(this.charactersLength - inString.length) + inString;
    const reversed = inString.split('').reverse();
  
    const shiftIndex = this.charactersLength - 1 - reversed.findIndex((val, i) => !parseInt(val) && parseInt(reversed[i + 1]));
    if (shiftIndex === this.charactersLength) {
        this.bitMask = 0;
    } else {                
        const firstOne = inString.split('').findIndex((val, i) => parseInt(val));
        if (shiftIndex - 1 === firstOne) {
            this.bitMask = parseInt('0'.repeat(shiftIndex) + '1'.repeat(this.combinationLength) + '0'.repeat(this.charactersLength - this.combinationLength - shiftIndex), 2);            
        } else {
            const countOnesBeforeShiftIndex = inString.slice(0, shiftIndex - 1).split('').filter((val) => parseInt(val)).length;
            let tmpMask = inString.slice(0, shiftIndex - 1) + '0' + '1'.repeat(this.combinationLength - countOnesBeforeShiftIndex);
            tmpMask = tmpMask + '0'.repeat(this.charactersLength - tmpMask.length);
            this.bitMask = parseInt(tmpMask, 2);

        }
    }
    return result.join('')
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
    if (!this.bitMask) return false;
    return true;
};

/** 
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
