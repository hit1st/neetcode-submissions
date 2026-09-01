class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');

        for (let i = 0; i < cleaned.length / 2; i += 1) {
            if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) return false;
        }

        return true;
    }
}
