class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const basecode = 97;

        const count = new Array(26).fill(0);

        for (let i = 0; i < s.length; i += 1) {
            count[s.charCodeAt(i) - basecode] += 1;
            count[t.charCodeAt(i) - basecode] -= 1;
        }

        for (let i = 0; i < count.length; i += 1) {
            if (count[i] !== 0) return false;
        }

        return true
    }
}