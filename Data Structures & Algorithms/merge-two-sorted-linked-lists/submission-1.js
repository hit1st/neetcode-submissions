/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (!list1 && !list2) return null;
        let currList1 = list1;
        let currList2 = list2;
        let mergeCurrent;
        let mergeHead;

        if (currList1 && currList2 && currList1.val <= currList2.val) {
            mergeCurrent = new ListNode(currList1.val);
            currList1 = currList1.next;
        } else {
            mergeCurrent = new ListNode(currList2.val);
            currList2 = currList2.next;
        }

        mergeHead = mergeCurrent;

        while (currList1 && currList2) {
            if (currList1.val <= currList2.val) {
                mergeCurrent.next = new ListNode(currList1.val);
                currList1 = currList1.next;
            } else {
                mergeCurrent.next = new ListNode(currList2.val);
                currList2 = currList2.next;
            }
            mergeCurrent = mergeCurrent.next;
        }

        let remaining = currList1 ? currList1 : currList2;

        while (remaining) {
            mergeCurrent.next = new ListNode(remaining.val);
            mergeCurrent = mergeCurrent.next;
            remaining = remaining.next;
        }

        return mergeHead;
    }
}
