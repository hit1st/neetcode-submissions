class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let longest = 0;
        let l = 0;
        let r = 0;

        while (r < s.length) {
            const count = Array(26).fill(0);

            for (let i = l; i <= r; i += 1) {
                count[s.toLowerCase().charCodeAt(i) - 97] += 1;
            }

            let mostFreqCount = 0;
            for (let i = 0; i < count.length; i += 1) {
                mostFreqCount = Math.max(mostFreqCount, count[i]);
            }

            const subStrLength = (r - l) + 1;
            const diff = subStrLength - mostFreqCount;
            if (k >= diff) longest = Math.max(longest, subStrLength);
            if (diff > k) l += 1;
            else r += 1;
        }

        return longest;
    }
}
