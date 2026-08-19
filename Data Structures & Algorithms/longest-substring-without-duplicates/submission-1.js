class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let longest = 0;
        const unique = new Set();

        for (let r = 0; r < s.length; r += 1) {
            while (unique.has(s[r])) {
                unique.delete(s[l]);
                l += 1;
            }
            unique.add(s[r]);
            longest = Math.max(longest, r - l + 1);
        }

        return longest;
    }
}
