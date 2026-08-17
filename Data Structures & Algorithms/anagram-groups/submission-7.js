class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};

        for (const str of strs) {
            const count = Array(26).fill(0);

            for (let i = 0; i < str.length; i += 1) {
                count[str.charCodeAt(i) - 97] += 1;
            }

            const key = count.join(',');

            if (!Object.hasOwn(groups, key)) groups[key] = [];

            groups[key].push(str);
        }

        return Object.values(groups);
    }
}
