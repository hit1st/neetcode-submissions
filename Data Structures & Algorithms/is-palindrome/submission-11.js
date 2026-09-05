class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;
        const regex = /[^A-Za-z0-9]/g;

        while (l < r) {
            while (l < r && regex.test(s[l])) l += 1;
            while (r > l && regex.test(s[r])) r -= 1;
            if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
            l += 1;
            r -= 1;
        }
        return true;
    }
}
