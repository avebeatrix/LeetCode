// Source : https://leetcode.com/problems/excel-sheet-column-number/
// Author : avebeatrix
// Date   : 2021-12-25
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let len = columnTitle.length;
    if (len === 1) {
        return arr_EN.indexOf(columnTitle) + 1;
    }   
    return columnTitle.split('').reduce((acc, val, index) => acc + (arr_EN.indexOf(val) + 1) * Math.pow(26, len - 1 - index), arr_EN.indexOf(columnTitle) + 1);
};