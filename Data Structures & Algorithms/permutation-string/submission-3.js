class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1 > s2) return false;

        const s1Count = Array(26).fill(0);
        const s2Count = Array(26).fill(0);

        for (let i = 0; i < s1.length; i += 1) {
            s1Count[s1.charCodeAt(i) - 97] += 1;
            s2Count[s2.charCodeAt(i) - 97] += 1;
        }

        const s1Length = s1.length;

        for (let i = 0; i < s2.length - s1Length; i += 1) {
            if (JSON.stringify(s1Count) === JSON.stringify(s2Count)) return true;
            s2Count[s2.charCodeAt(i) - 97] -= 1;
            s2Count[s2.charCodeAt(i + s1Length) - 97] += 1;
        }

        return false;
    }
}
