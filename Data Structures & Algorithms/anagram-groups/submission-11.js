class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};

        for (let i = 0; i < strs.length; i += 1) {
            const count = Array(26).fill(0);

            for (const s of strs[i]) {
                count[s.charCodeAt(0) - 97] += 1;
            }

            const key = count.join('#');

            if (!Object.hasOwn(groups, key)) groups[key] = [];
            groups[key].push(strs[i]);
        }

        return Object.values(groups);
    }
}
