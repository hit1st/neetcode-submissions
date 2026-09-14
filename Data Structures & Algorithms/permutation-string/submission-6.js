class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const s1Count = Array(26).fill(0);
        const s2Count = Array(26).fill(0);
        for (let i = 0; i < s1.length; i += 1) {
            s1Count[s1[i].charCodeAt(0) - 97] += 1;
            s2Count[s2[i].charCodeAt(0) - 97] += 1;
        }
        
        const s1CountStr = JSON.stringify(s1Count);

        for (let i = 0; i < s2.length - s1.length; i += 1) {
            if (s1CountStr === JSON.stringify(s2Count)) return true;
            s2Count[s2[i].charCodeAt(0) - 97] -= 1;
            s2Count[s2[i + s1.length].charCodeAt(0) - 97] += 1;
        }

        return false;
    }
}
