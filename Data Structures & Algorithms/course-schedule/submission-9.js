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

        for (const [num, prereq] of prerequisites) {
            cMap.get(num).push(prereq);
        }

        const visited = new Set();

        const dfs = (course) => {
            if (visited.has(course)) return false;
            if (cMap.get(course).length === 0) return true;

            visited.add(course);
            for (const prereq of cMap.get(course)) {
                if (!dfs(prereq)) return false;
            }
            cMap.set(course, []);
            visited.delete(course);
            return true;
        }

        for (let cs = 0; cs < numCourses; cs += 1) {
            if (!dfs(cs)) return false;
        }

        return true;
    }
}
