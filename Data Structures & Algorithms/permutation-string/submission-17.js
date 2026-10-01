class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const s1Count = Array(26).fill(0);
        const window = Array(26).fill(0);

        for (let i = 0; i < s1.length; i += 1) {
            s1Count[s1.charCodeAt(i) - 97] += 1;
            window[s2.charCodeAt(i) - 97] += 1;
        }

        if (window.every((num, i) => num === s1Count[i])) return true;

        let l = 0;
        for (let r = s1.length; r < s2.length; r += 1) {
            window[s2.charCodeAt(r) - 97] += 1;
            window[s2.charCodeAt(l) - 97] -= 1;
            l += 1;
            if (window.every((num, i) => num === s1Count[i])) return true;
        }
        return false;
    }
}
