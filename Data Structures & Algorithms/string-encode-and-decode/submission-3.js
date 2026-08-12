class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.reduce((coded, str) => coded + str.length + '#' + str, '');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const output = [];
        let i = 0;
        let strNum = '';
        let strLength = 0;
        let currString = '';

        while (i < str.length) {
            // if str[i] === #
            if (str[i] === '#') {
                strLength = parseInt(strNum);
                strNum = '';
            //   process string and push to output
                currString = str.slice(i + 1, i + strLength + 1);
                output.push(currString);
                currString = '';
            //   increment i by strNum
                i += strLength + 1;
            // else
            } else {
                strNum += str[i];
                i += 1;
            }
            //   increment i
        }
        return output;
    }
}
