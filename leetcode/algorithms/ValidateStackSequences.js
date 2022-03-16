// Source : https://leetcode.com/problems/validate-stack-sequences/
// Author : avebeatrix
// Date   : 2022-03-16
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
/* to-do: make shorter */
 var validateStackSequences = function(pushed, popped) {
     let result = false;
     let push_l = pushed.length;
     let pop_l = popped.length;
    let step = (pushed_pointer, popped_pointer, arr) => {  
        if (result) return;
        if (!arr.length && pushed_pointer === push_l && popped_pointer === pop_l) {
            result = true;
        }    
        /* greedy - pop as you can, don't delay it */         
        if (arr.length && popped[popped_pointer] === arr[arr.length - 1]){
            let pop_el = arr.pop();
            if (pop_el === pushed[pushed_pointer]) {
                pushed_pointer++;
            }
            
            if (popped_pointer < pop_l){                
               
                queue.push([pushed_pointer, popped_pointer + 1, [...arr]]);
            } 
        }  else if (pushed_pointer < push_l){               
            queue.push([pushed_pointer + 1, popped_pointer, [...arr, pushed[pushed_pointer]]]);
        }
    }
    let queue = [[0, 0, []]];
    while (queue.length) {
        let [pushed_pointer, popped_pointer, arr] = queue.pop();
        step(pushed_pointer, popped_pointer, arr);        
        if (result) break;
    }
    return result;
};
