class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const count = Array(26).fill(0);

        for (let i = 0; i < s.length; i += 1) {
            count[s[i].charCodeAt(0) - 97] += 1;
            count[t[i].charCodeAt(0) - 97] -= 1;
        }

        return count.every(n => n === 0);
    }
}