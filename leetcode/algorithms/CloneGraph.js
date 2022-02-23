// Source : https://leetcode.com/problems/clone-graph/
// Author : avebeatrix
// Date   : 2022-02-23
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    if (!node) return null;
    let map = new Map();

    let head = {
        val: node.val,
        neighbors: []
    };
    map.set(node.val, head);

    let addNeighbors = (node, neighbors) => {
        neighbors.forEach(neighbor => {
            if (!map.has(neighbor.val)) {
                let new_node = {
                    val: neighbor.val,
                    neighbors: []
                }
                node.neighbors.push(new_node);
                map.set(new_node.val, new_node);
                addNeighbors(new_node, neighbor.neighbors);
            } else {
                node.neighbors.push(map.get(neighbor.val));
            }
        })
    }
    addNeighbors(head, node.neighbors);

    return head;
};