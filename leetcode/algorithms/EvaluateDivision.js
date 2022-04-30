// Source : https://leetcode.com/problems/evaluate-division/
// Author : avebeatrix
// Date   : 2022-04-30
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */

 var calcEquation = function(equations, values, queries) {
    let map = new Map();
    equations.forEach((val, i) => {
        let [p1, p2] = val;
        if (!map.has(p1)) {
            map.set(p1, []);            
        }
        if (!map.has(p2)) {
            map.set(p2, []);            
        }
        map.get(p1).push([p2, values[i]]);
        map.get(p2).push([p1, 1 / values[i]]);
    })
    let answers = [];
    queries.forEach(query => {
        let used = new Set();

        let answer = -1;
        let answerIsFinded = false;

        let [start, final] = query;      

        if (start === final && map.has(start)) {
            answer = 1;
        }

        let queue = [[start, 1]];
        used.add(start);
        
        let newQ = [];
        while (queue.length && !answerIsFinded) {
                                 
            let [element, factor] = queue.pop();

            if (!map.has(element)) continue;

            map.get(element).forEach(node => {
                let [paramName, relation] = node;
                if (used.has(paramName)) return;
                used.add(paramName);
                if (paramName === final) {
                    answerIsFinded = true;
                    answer = factor * relation;
                    return;
                }
                newQ.push([paramName, factor * relation])
            })           
            if (!queue.length) {
                queue = newQ;
                newQ = [];
            }            
        }
        answers.push(answer);
    })
    return answers;
};