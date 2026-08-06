class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        
        let newS: string = s;
        let newT: string = t;

        for (const char of s) {
            newS = newS.replace(char, "");
            newT= newT.replace(char, "");
        }

        return newS.length === newT.length;
    }
}
