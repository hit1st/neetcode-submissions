class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s2.length < s1.length) return false;

        const s1Count = Array(26).fill(0);
        const s2Count = Array(26).fill(0);
        for (let i = 0; i < s1.length; i += 1) {
            s1Count[s1[i].charCodeAt(0) - 97] += 1;
            s2Count[s2[i].charCodeAt(0) - 97] += 1;
        }

        const isSame = (count1, count2) => {
            if (count1.every((num, i) => num === count2[i])) return true;
        } 

        if (isSame(s1Count, s2Count)) return true;

        let l = 0;

        for (let r = s1.length; r < s2.length; r += 1) {
            s2Count[s2[r].charCodeAt(0) - 97] += 1;
            s2Count[s2[r - s1.length].charCodeAt(0) - 97] -= 1;
            if (isSame(s1Count, s2Count)) return true;
        }
        
        return false;
    }
}
