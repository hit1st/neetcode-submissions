class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        const regex = /[^a-zA-Z0-9]/;
        while (l < r) {

            while (regex.test(s[l])) l += 1;
            while (regex.test(s[r])) r -= 1;

            if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
            l += 1;
            r -= 1;
        }
        return true;
    }
}
