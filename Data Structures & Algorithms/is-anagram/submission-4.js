class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const hashMapS = {};
        const hashMapT = {};

        for (let i = 0; i < s.length; i += 1) {
            const charS = s[i];
            const charT = t[i];

            hashMapS[charS] = hashMapS[charS] ? hashMapS[charS] + 1 : 1;
            hashMapT[charT] = hashMapT[charT] ? hashMapT[charT] + 1 : 1;
        }

        for (const char in hashMapS) {
            if (hashMapS[char] !== hashMapT[char]) return false;
        }

        return true;
    }
}
