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

            while (l < r && regex.test(s[l])) l += 1;
            while (r > l && regex.test(s[r])) r -= 1;

            console.log(`s[${l}]: ${s[l]}`);
            console.log(`s[${r}]: ${s[r]}`);
            if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
            l += 1;
            r -= 1;
        }
        return true;
        // const cleanStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

        // for (let i = 0; i < cleanStr.length / 2; i += 1) {
        //     const j = cleanStr.length - 1 - i;
        //     if (cleanStr[i] !== cleanStr[j]) return false;
        // }
        // return true;
    }
}
