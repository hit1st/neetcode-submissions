class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const sArr = s.toLowerCase().replace(/[^a-z0-9]/g, '').split(' ').join('');
        
        for (let i = 0; i < sArr.length / 2; i += 1) {
            if (sArr[i] !== sArr[sArr.length - 1 - i]) return false;
        }
        
        return true;
    }
}
