class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const freqMap = new Map();
        let mostFreq = 0;
        let longest = 0;
        let l = 0;

        // for (const c of s) {
        //     freqMap.set(c, (freqMap.get(c) || 0) + 1);
        // }

        for (let r = 0; r < s.length; r += 1) {
            freqMap.set(s[r], (freqMap.get(s[r]) || 0) + 1);
            mostFreq = Math.max(mostFreq, freqMap.get(s[r]));
            longest = Math.max(longest, r - l + 1);
            while ((r - l + 1) - mostFreq === k) {
                l += 1;
            }
        }

        return longest;
    }
}
