class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const regex = /[^a-z0-9]/g;

        const cleanStr = s
            .toLowerCase()
            .replace(regex, '');
        
        let l = 0;
        let r = cleanStr.length - 1;

        while (l < r) {
            if (cleanStr[l] !== cleanStr[r]) return false;
            l += 1;
            r -= 1;
        }

        return true;
    }
}
