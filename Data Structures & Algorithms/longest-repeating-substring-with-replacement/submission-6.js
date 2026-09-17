class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = new Map();
        let longest = 0;
        let mostFreq = 0;
        let l = 0;

        for (let r = 0; r < s.length; r += 1) {
            count.set(s[r], (count.get(s[r]) || 0) + 1);
            mostFreq = Math.max(mostFreq, count.get(s[r]));
            while (r - l + 1 - mostFreq > k) {
                count.set(s[l], (count.get(s[l] - 1)));
                l += 1;
            }
            longest = Math.max(longest, r - l + 1);
        }

        return longest;
    }
}
