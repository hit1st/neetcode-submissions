class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const count = Array(26).fill(0);
        const baseCode = 97;

        for (let i = 0; i < s.length; i += 1) {
            count[s.charCodeAt(i) - baseCode] += 1;
            count[t.charCodeAt(i) - baseCode] -= 1;
        }

        return count.every((num) => num === 0);
    }
}