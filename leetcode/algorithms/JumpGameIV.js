// Source : https://leetcode.com/problems/jump-game-iv/
// Author : avebeatrix
// Date   : 2022-01-15
/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function (arr) {
    let map = new Map();
    arr.forEach((val, i) => {
        if (!map.has(val)) {
            map.set(val, []);
        }
        map.get(val).push(i);
    })
    map.forEach((val, key) => {
        if (val.length === 1) {
            map.delete(key);
        } else {
            let new_arr = [];
            let cur_index = val[0];
            for (let i = 1; i < val.length; i++) {
                if (val[i] == cur_index + 1) {
                    cur_index++
                } else {
                    if (cur_index !== new_arr[new_arr.length - 1]) {
                        new_arr.push(cur_index);
                    }
                    cur_index = val[i];
                    new_arr.push(cur_index);
                }
            }
            if (!new_arr.length) {
                new_arr.push(val[0]);
                new_arr.push(val[val.length - 1]);
            }
            map.set(key, new Set(new_arr));
        }

    })
    if (!map.size) return arr.length - 1;
    if (map.has(arr[0])) {
        map.get(arr[0]).delete(0);
    }
    let queue = [0];
    let visited = new Set([0]);

    let counter = 0;
    while (true) {
        let new_queue = [];
        while (queue.length) {

            let current_index = queue.pop();

            if (current_index > 1 && !visited.has(current_index - 1)) {
                new_queue.push(current_index - 1);
                visited.add(current_index - 1);
                if (current_index - 1 === arr.length - 1) {
                    return counter + 1;
                }
            }
            if (current_index < arr.length - 1 && !visited.has(current_index + 1)) {
                new_queue.push(current_index + 1);
                visited.add(current_index + 1);
                if (current_index + 1 === arr.length - 1) {
                    return counter + 1;
                }
            }

            if (map.has(arr[current_index]) && map.get(arr[current_index]).size) {

                let filtered_map_arr = [...map.get(arr[current_index])].filter(val => !visited.has(val) && val !== current_index);
                for (let index of filtered_map_arr) {
                    new_queue.push(index);
                    visited.add(index);

                    if (index === arr.length - 1) {
                        return counter + 1;
                    }
                }
                map.delete(arr[current_index]);
            }
        }
        counter++;
        queue = new_queue;
    }

};