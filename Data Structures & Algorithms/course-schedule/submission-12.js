class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const cMap = new Map();

        for (let c = 0; c < numCourses; c += 1) {
            cMap.set(c, []);
        }

        for (const [c, pre] of prerequisites) {
            cMap.get(c).push(pre);
        }

        const visited = new Set();

        const dfs = (cs) => {
            if (visited.has(cs)) return false;
            if (cMap.get(cs).length === 0) return true;

            visited.add(cs);
            for (const prereq of cMap.get(cs)) {
                if (!dfs(prereq)) return false;
            }
            cMap.set(cs, []);
            visited.delete(cs);
            return true;
        }

        for (let c = 0; c < numCourses; c += 1) {
            if (!dfs(c)) return false;
        }
        return true;
    }
}
