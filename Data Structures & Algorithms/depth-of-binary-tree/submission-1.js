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
        if (!root) return 0;
        
        let longest = 0;
        
        const dfs = (root, length) => {
            if (root.left) dfs(root.left, length + 1);
            if (root.right) dfs(root.right, length + 1);
            longest = Math.max(longest, length);
        }
        
        dfs(root, 1);
        return longest;
    }
}
