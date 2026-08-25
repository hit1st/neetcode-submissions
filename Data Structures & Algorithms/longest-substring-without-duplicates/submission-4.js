class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set();
        let longest = 0;
        let l = 0;
        
        for (let r = 0; r < s.length; r += 1) {
            while (set.has(s[r])) {
                set.delete(s[l]);
                l += 1; 
            }
            set.add(s[r]);
            longest = Math.max(longest, r - l + 1);
        }
        
        return longest;
    }
}
