class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};
        
        for (const s of strs) {
            const count = Array(26).fill(0);
            
            for (const c of s) {
            count[c.charCodeAt(0) - 97] += 1;
            }
            
            const key = count.join(',');
            
            if (!groups[key]) groups[key] = [];
            groups[key].push(s);
        }
        
        return Object.values(groups);
    }
}
