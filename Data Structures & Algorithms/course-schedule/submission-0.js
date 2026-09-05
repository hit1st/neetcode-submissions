class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const csMap = new Map();

        for (let c = 0; c < numCourses.length; c += 1) {
            console.log('c: ', c);
            csMap.set(c, new Set());
        }
        console.log('csMap initial: ', csMap);

        for (const [c, prereq] of prerequisites) {
            csMap.get(c).add(prereq);
        }

        const visited = new Set();


        const dfs = (cs) => {
            if (visited.has(cs)) return false;

            if (csMap.get(cs).size === 0) return true;

            visited.add(cs);

            for (const c of csMap.get(cs)) {
                if (!dfs(c)) return false;
                csMap.get(cs).delete(c);
            }
            visited.delete(cs);
            return true;
        };

        if (!dfs(0)) return false;
        return [...csMap].values().every(set => set.size === 0);
    }
}
