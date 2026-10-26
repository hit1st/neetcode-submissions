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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;


        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let l2 = slow.next;
        slow.next = null;

        let prev = null;
        let curr = l2;
        
        while (curr) {
            const temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        let l1 = head;
        l2 = prev;

        while (l2) {
            const temp1 = l1.next;
            const temp2 = l2.next;

            l1.next = l2;
            l2.next = temp1;
            l1 = temp1;
            l2 = temp2;
        }

    }
}
