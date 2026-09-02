class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const csMap = new Map();

        for (let c = 0; c < numCourses; c += 1) {
            csMap.set(c, new Set());
        }

        for (const [c, prereq] of prerequisites) {
            csMap.get(c).add(prereq);
        }
        console.log('csMap initial: ', csMap);

        const visited = new Set();


        const dfs = (cs) => {
            if (visited.has(cs)) return false;

            if (csMap.get(cs).size === 0) return true;

            visited.add(cs);

            for (const c of csMap.get(cs)) {
                console.log('c: ', c);
                if (!dfs(c)) return false;
                csMap.get(cs).delete(c);
            }
            visited.delete(cs);
            return true;
        };

        for (let c = 0; c < numCourses; c += 1) {
            if (!dfs(c)) return false;
        }
        console.log('csMap: ', csMap);
        return [...csMap.values()].every(set => set.size === 0);
    }
}
