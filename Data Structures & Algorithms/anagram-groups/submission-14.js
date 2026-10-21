class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (const s of strs) {
            const count = Array(26).fill(0);

            for (const c of s) {
                count[c.charCodeAt(0) - 97] += 1;
            }
            
            const key = JSON.stringify(count);
            if (!map.has(key)) map.set(key, []);
            map.get(key).push(s);
        }

        return [...map.values()];
    }
}
