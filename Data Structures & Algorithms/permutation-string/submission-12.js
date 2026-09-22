class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        // create are which represent frequency of letters in s1
        const s1Count = Array(26).fill(0);
        for (let c of s1) {
            s1Count[c.charCodeAt(0) - 97] += 1;
        }

        const s2Count = Array(26).fill(0);
        let l = 0;

        for (let r = 0; r < s2.length; r += 1) {
            s2Count[s2[r].charCodeAt(0) - 97] += 1;
            if (r >= s1.length) {
                s2Count[s2[l].charCodeAt(0) - 97] -= 1;
                l += 1;
            }
            if (s1Count.every((num, i ) => num === s2Count[i])) return true;
        }

        return false;
    }
}
