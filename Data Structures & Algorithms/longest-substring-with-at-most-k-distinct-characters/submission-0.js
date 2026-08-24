class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    lengthOfLongestSubstringKDistinct(s, k) {
        const map = new Map();
        let longest = 0;
        let l = 0;
        
        for (let r = 0; r < s.length; r += 1) {
            map.set(s[r], (map.get(s[r]) || 0) + 1);
            while (map.size > k) {
                map.set(s[l], map.get(s[l]) - 1);
                if (map.get(s[l]) === 0) map.delete(s[l]);
                l += 1;
            }
            longest = Math.max(longest, r - l + 1);
        }
        
        return longest;
    }
}
