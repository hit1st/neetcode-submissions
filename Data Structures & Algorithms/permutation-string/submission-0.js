class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const countS1 = Array(26).fill(0);
        const countS2 = Array(26).fill(0);

        for (const char of s1) {
            countS1[char.charCodeAt(0) - 97] += 1;
        }

        for (const char of s2) {
            countS2[char.charCodeAt(0) - 97] += 1;
        }

        for (const char of s1) {
            if (countS1[char.charCodeAt(0) - 97] !== countS2[char.charCodeAt(0) - 97]) return false;
        }

        return true;
     }
}
