class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const csMap = new Map;

        for (let c = 0; c < numCourses; c += 1) {
            csMap.set(c, new Set());
        }

        for (const [course, prereq] of prerequisites) {
            csMap.get(course).add(prereq);
        }

        const visited = new Set();

        const dfs = (course) => {
            if (visited.has(course)) return false;
            if (csMap.get(course).size === 0) return true;

            visited.add(course);

            for (const prereq of csMap.get(course)) {
                if (!dfs(prereq)) return false;
            }

            visited.delete(course);
            return true;
        }

        for (let cs = 0; cs < numCourses; cs += 1) {
            if (!dfs(cs)) return false;
        }
        return true;
    }
}
