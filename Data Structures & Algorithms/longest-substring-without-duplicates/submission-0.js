class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length < 2) return s.length;

        let l = 0;
        let r = 1;
        let longest = 0;
        const unique = new Set(s[0]);

        while (r < s.length) {
            while (unique.has(s[r])) {
                unique.delete(s[l]);
                l += 1;
            }
            unique.add(s[r]);
            longest = Math.max(longest, r - l + 1);
            r += 1;
        }

        return longest;
    }
}
