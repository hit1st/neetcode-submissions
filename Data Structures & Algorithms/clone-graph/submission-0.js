/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const dfs = (node, oldToNew = new Map()) => {
            if (!node) return null;

            if (oldToNew.has(node)) return oldToNew.get(node);

            const clone = new Node(node.val);
            oldToNew.set(node, clone);

            for (const neighbor of node.neighbors) {
                oldToNew.get(node).neighbors.push(dfs(neighbor, oldToNew));
            }

            return clone;
        }

        return dfs(node);
    }
}
