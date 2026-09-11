class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = new Map();
        let mostFreq = 0;
        let longest = 0;
        let l = 0;

        for (let r = 0; r < s.length; r += 1) {
            map.set(s[r], (map.get(s[r]) || 0) + 1);
            mostFreq = Math.max(mostFreq, map.get(s[r]));
            while (r - l + 1 - mostFreq > k) {
                map.set(s[l], map.get(s[l]) - 1);
                l += 1;
            }
            longest = Math.max(longest, r - l + 1);
        }

        return longest;
    }
}
