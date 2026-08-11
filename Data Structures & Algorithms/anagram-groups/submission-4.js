class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};

        for (let i = 0; i < strs.length; i += 1) {
            const count = new Array(26).fill(0);

            for (let j = 0; j < strs[i].length; j += 1) {
                count[strs[i].charCodeAt(j) - 97] += 1;
            }

            const key = count.join();
            if (!groups[key]) groups[key] = [];
            groups[key].push(strs[i]);
        }

        return Object.values(groups);
    }
}
