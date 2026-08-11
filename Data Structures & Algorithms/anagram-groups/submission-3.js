class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};

        for (let i = 0; i < strs.length; i += 1) {
            const curr = new Array(26).fill(0);

            for (let j = 0; j < strs[i].length; j += 1) {
                curr[strs[i].charCodeAt(j) - 97] += 1;
            }

            const currStr = curr.join();
            if (!groups[currStr]) groups[currStr] = [];
            groups[currStr] = [...groups[currStr], strs[i]]
        }

        return Object.values(groups);
    }
}
