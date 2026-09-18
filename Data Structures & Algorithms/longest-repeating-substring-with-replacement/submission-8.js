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

        for (let r = 0; r < s.length; s += 1) {
            count.set(s[r], (count.get(s[r]) + 1));
            console.log('count: ', count);
            console.log('l: ', l);
            console.log('r: ', r);
            mostFreq = Math.max(mostFreq, count.get(s[r]));
            console.log('mostFreq: ', mostFreq);
            // while (r - l + 1 - mostFreq > k) {
            //     count.set(s[l], (count.get(s[l] - 1)));
            //     l += 1;
            // }
            longest = Math.max(longest, r - l + 1);
        }
        return longest;
    }
}
