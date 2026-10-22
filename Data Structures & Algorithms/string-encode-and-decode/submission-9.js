class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs
            .map((s) => `${s.length}#${s}`)
            .join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let currStr = '';
        let currLengthNum = 0;
        let currWord = '';
        const strs = [];

        for (let i = 0; i < str.length; i += 1) {
            currStr += str[i];
            if (str[i] === '#') {
                currLengthNum = parseInt(currStr, 10);
                currStr = '';
                currWord = str.substring(i + 1, i + 1 + currLengthNum);
                strs.push(currWord);
                currWord = '';
                i = i + currLengthNum;
            }
        }
        return strs;
    }
}