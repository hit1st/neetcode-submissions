class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const cMap = new Map();

        let longest = 0;
        let mostFreq = 0;
        let l = 0;

        for (let r = 0; r < s.length; r += 1) {
            const ch = s[r];
            cMap.set(ch, (cMap.get(ch) || 0) + 1);
            mostFreq = Math.max(mostFreq, cMap.get(ch));

            while ((r - l + 1 - mostFreq) > k) {
                cMap.set(s[l], cMap.get(s[l]) - 1);
                l += 1;
            }

            longest = Math.max(longest, r - l + 1);
        }

        return longest;
    }
}
