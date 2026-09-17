class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const chars = new Set();
        let longest = 0;
        let l = 0;

        for (let r = 0; r < s.length; r += 1) {
            const ch = s[r];
            while (l < r && chars.has(ch)) {
                chars.delete(s[l]);
                l += 1;
            }
            chars.add(ch);
            longest = Math.max(longest, r - l + 1);
        }
        
        return longest;
    }
}
