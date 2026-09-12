class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let longest = 0;
        let l = 0;
        let mostFreq = 0;
        const freqMap = {}

        for (let r = 0; r < s.length; r += 1) {
            freqMap[s[r]] = (freqMap[s[r]] || 0) + 1;
            mostFreq = Math.max(mostFreq, freqMap[s[r]]);
            while ((r - l + 1 - mostFreq) > k) {
                freqMap[s[l]] -= 1;
                l += 1;
            }
            longest = Math.max(longest, r - l + 1);
        }

        return longest;
    }
}
