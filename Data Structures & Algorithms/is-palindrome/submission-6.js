class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanS = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

        for (let i = 0; i < cleanS.length / 2; i += 1) {
            if (cleanS[i] !== cleanS[cleanS.length - 1 - i]) return false;
        }

        return true;
    }
}
