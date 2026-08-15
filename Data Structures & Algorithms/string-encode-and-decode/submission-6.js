class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map((str) => str.length + '#' + str).join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let output = [];
        let strNum = ''
        let currentNum = 0;
        let currentWord = '';
        let i = 0;

        while ( i < str.length) {
            if (str[i] === '#') {
                currentNum = parseInt(strNum);
                strNum = '';
                i += 1;
                currentWord = str.slice(i, i + currentNum);
                output.push(currentWord);
                i += currentNum;
            }
            strNum += str[i];
            i += 1
        }
        return output;
    }
}
