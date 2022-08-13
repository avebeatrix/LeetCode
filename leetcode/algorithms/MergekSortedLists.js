/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/* not good, todo: memory log(N) => N */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
const merge = (list1, list2) => {
    if (!list1 && !list2) {
        return null;
    } 
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }
    let merged = list1.val < list2.val ? list1 : list2;  
  
    let last = merged;
    while (list1 || list2) {
        if (!list1) {
            merged.val = list2.val;
            list2 = list2.next;
        } else if (!list2) {
            merged.val = list1.val;
            list1 = list1.next;
        } else if (list1.val < list2.val) {
            merged.val = list1.val;
            list1 = list1.next;
        } else {
            merged.val = list2.val;
            list2 = list2.next;
        }
        last = merged;
        merged.next = new ListNode();
        merged = merged.next;
    }
    last.next = null; 
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let N = lists.length;

    if (!N) return null;

    while (N > 1) {
        let mediana = Math.floor(N / 2);

        for (let i = 0; i < mediana; i++) {
            merge(lists[i], lists[N - i - 1]);
        }
        if (N % 2 === 1) {
            merge(lists[0], lists[1]);
        }
        N = mediana;
    }

    return lists[0];  
};

let lists = [];
//[[1,4,5],[1,3,4],[2,6]]
lists.push(new ListNode(
    1,
    new ListNode(
        4,
        new ListNode(
            5
        )
    )
))
lists.push(new ListNode(
    1,
    new ListNode(
        3,
        new ListNode(
            4
        )
    )
))
lists.push(new ListNode(
    2,
    new ListNode(
        6
    )
))
let d = mergeKLists(lists);
let k;