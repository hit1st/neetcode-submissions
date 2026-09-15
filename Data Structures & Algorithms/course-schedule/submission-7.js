class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const map = new Map();

        for (let c = 0; c < numCourses; c += 1) {
            map.set(c, []);
        }

        for (const [c, pre] of prerequisites) {
            map.get(c).push(pre);
        }

        const visited = new Set();

        const dfs = (cs) => {

            if (visited.has(cs)) return false;
            if (map.get(cs).length === 0) return true;

            visited.add(cs);

            for (const pre of map.get(cs)) {
                if (!dfs(pre)) return false;
                map.set(cs, []);
            }

            visited.delete(cs);
            return true;
        }

        for (let c = 0; c < numCourses; c += 1) {
            if (!dfs(c)) return false;
        }
        return true;
    }
}
