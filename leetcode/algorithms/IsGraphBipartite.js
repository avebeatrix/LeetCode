// Source : https://leetcode.com/problems/path-with-minimum-effort/
// Author : avebeatrix
// Date   : 2022-04-29
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
    let N = graph.length;

    let groups = [];

    let unused = new Set(Array(N).fill(0).map((val, key) => key));

    let getGroup = (i, set) => {
        graph[i].forEach(val => {
            if (!set.has(val)) {
                set.add(val);
                set = getGroup(val, set);
            }
        })
        return set;
    }

    for (let i = 0; i < N; i++) {
        if (unused.has(i)) {
            let groupIds = getGroup(i, new Set([i]));
            [...groupIds].forEach(element => {
                unused.delete(element);
            });
            groups.push(groupIds);
        }
    }
    let isBip = group => {
        let p1 = new Set();
        let p2 = new Set();
        let unused = new Set([...group]);

        while (unused.size) {
            let tmp = [...unused];
            tmp.forEach(val => {
                if (!p1.size) {
                    p1.add(val);
                    unused.delete(val);
                    graph[val].forEach(v => {
                        p2.add(v);
                        unused.delete(v);
                    })
                    return;
                }
                if (p1.has(val)) {
                    graph[val].forEach(v => {
                        p2.add(v);
                        unused.delete(v);
                    })
                } else if (p2.has(val)) {
                    graph[val].forEach(v => {
                        p1.add(v);
                        unused.delete(v);
                    })
                }
            })
        }
        if ([...p1].filter(val => p2.has(val)).length) return false;
        return true;
    }
    let result = true;
    groups.forEach(group => {
        if (!isBip(group)) {
            result = false;
        }
    })

    return result;
};