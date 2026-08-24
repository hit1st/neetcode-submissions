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
     * @return {number}
     */
    maxDepth(root) {
        let max = 0;

        const traverse = (node, currentDepth) => {
            if (node.left) traverse(node.left, currentDepth + 1);
            if (node.right) traverse(node.right, currentDepth + 1);
            max = Math.max(max, currentDepth);
        }

        if (root) traverse(root, 1);

        return max;
    }
}
