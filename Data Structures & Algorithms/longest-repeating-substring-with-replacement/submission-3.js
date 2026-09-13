class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = new Map();
        let mostFreqCount = 0;
        let longest = 0
        let l = 0;

        for (let r = 0; r < s.length; r += 1) {
            map.set(s[r], (map.get(s[r]) || 0) + 1);
            mostFreqCount = Math.max(mostFreqCount, map.get(s[r]));
            // check if current string length - mostFreqCount > k increment l
            while ((r - l + 1) - mostFreqCount > k) {
                map.set(s[l], map.get(s[l]) - 1);
                if (map.get(s[l]) === 0) map.delete(s[l]);
                l += 1;
            }
            longest = Math.max(longest, r - l + 1);
        }

        return longest;
    }
}
