class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};

        for (let i = 0; i < strs.length; i += 1) {
            const currStr = strs[i];
            const currCount = Array(26).fill(0);

            for (let j = 0; j < currStr.length; j += 1) {
                currCount[currStr.charCodeAt(j) - 97] += 1;
            }

            const key = currCount.join();

            if (!groups.hasOwnProperty(key)) groups[key] = [];
            groups[key].push(currStr); 
        }

        return Object.values(groups);
    }
}
