class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s2.length < s1.length) return false;

        const windowLength = s1.length;

        const countS1 = new Map();
        const countS2 = new Map();

        for (const s of s1) {
            countS1.set(s, (countS1.get(s) || 0) + 1);
        }

        for (let i = 0; i < windowLength - 1; i += 1) {
            countS2.set(s2[i], (countS2.get(s2[i]) || 0) + 1);
        }

        for (let l = 0; l <= s2.length - windowLength; l += 1) {
            const r = l + windowLength - 1;
            countS2.set(s2[r], (countS2.get(s2[r]) || 0) + 1);
            if ([...countS1.keys()].every((char) => countS1.get(char) === countS2.get(char))) return true;
            countS2.set(s2[l], countS2.get(s2[l]) - 1);
            if (countS2.get(s2[l]) === 0) countS2.delete(s2[l]);
        }

        return false;
    }
}
