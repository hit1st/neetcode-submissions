class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const count = new Int32Array(26); 
        const baseCode = 97;

        for (let i = 0; i < s.length; i++) {
            count[s.charCodeAt(i) - baseCode]++;
            count[t.charCodeAt(i) - baseCode]--;
        }

        for (let i = 0; i < 26; i++) {
            if (count[i] !== 0) return false;
        }
        
        return true;
    }
}
