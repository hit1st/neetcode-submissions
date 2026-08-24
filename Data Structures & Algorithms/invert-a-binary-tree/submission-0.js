/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        if (root === null) return root;
        const queue = [root];

        const bfs = () => {
            console.log('queue: ', queue);
            if (queue.length === 0) return;
            const current = queue.shift();
            console.log('current: ', current);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
            
            if (current.left || current.right) {
                const temp = current.left;
                current.left = current.right;
                current.right = temp;
            }
            bfs();
        }

        bfs();
        return root;
    }
}
