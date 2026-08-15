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
            const currentChar = str[i];
            if (currentChar === '#') {
                currentNum = parseInt(strNum);
                strNum = '';
                i += 1;
                currentWord = str.slice(i, i + currentNum);
                output.push(currentWord);
                currentWord = '';
                i += currentNum;
                currentNum = 0;
            }
            strNum += str[i];
            i += 1
        }
        return output;
    }
}
