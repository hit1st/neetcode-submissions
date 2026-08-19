class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const unique = new Map();
        let l = 0;
        let longest = 0;

        for (let r = 0; r < s.length; r += 1) {
            if (unique.has(s[r])) l = Math.max(unique.get(s[r]) + 1, l);
            unique.set(s[r], r);
            longest = Math.max(longest, r - l + 1);
        }

        return longest;
    }
}
