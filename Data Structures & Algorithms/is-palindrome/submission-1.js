class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

        for (let i = 0; i < cleanStr.length / 2; i += 1) {
            const j = cleanStr.length - 1 - i;
            if (cleanStr[i] !== cleanStr[j]) return false;
        }
        return true;
    }
}
