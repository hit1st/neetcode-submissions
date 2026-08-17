class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};

        for (const str of strs) {
            const count = Array(26).fill(0);

            for (const s of str) {
                count[s.charCodeAt(0) - 97] += 1;
            }

            const key = count.join("#");

            if (!Object.hasOwn(groups, key)) groups[key] = [];
            groups[key].push(str);
        }

        return Object.values(groups);
    }
}
