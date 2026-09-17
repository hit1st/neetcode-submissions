class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const count = new Map();
        let longest = 0;
        let l = 0;

        for (let r = 0; r < s.length; r += 1) {
            while (count.has(s[r])) {
                count.set(s[l], count.get(s[l]) - 1);
                if (count.get(s[l]) === 0) count.delete(s[l]);
                l += 1;
            }
            count.set(s[r], (count.get(s[r]) || 0) + 1);
            longest = Math.max(longest, r - l + 1);
        }

        return longest;
    }
}
