class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(str => `${str.length}#${str}`).join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const output = [];
        let numStr = '';
        let i = 0;

        while (i < str.length) {
            if (str[i] === '#') {
                const strLength = parseInt(numStr, 10);
                numStr = '';
                i += 1;
                output.push(str.slice(i, i + strLength));
                i += strLength;
            }
            numStr += str[i];
            i += 1;
        }

        return output;
    }

}