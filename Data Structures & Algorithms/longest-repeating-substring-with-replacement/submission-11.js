class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = new Map();

        let mostFreq = 0;
        let longest = 0;
        let l = 0;

        for (let r = 0; r < s.length; r += 1) {
            const ch = s[r];
            count.set(ch, (count.get(ch) || 0) + 1);
            mostFreq = Math.max(mostFreq, count.get(ch));
            while (r - l + 1 - mostFreq > k) {
                count.set(s[l], count.get(s[l]) - 1);
                l += 1;
            }
            longest = Math.max(longest, r - l + 1);
        }

        return longest;
    }
}
