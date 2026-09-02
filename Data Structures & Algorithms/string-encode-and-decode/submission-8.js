class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(str => `${str.length}#${str}`).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded = [];
        let elementLength = '';
        let i = 0;

        while (i < str.length) {
            if (str[i] === '#') {
                const length = parseInt(elementLength, 10);
                i += 1;
                decoded.push(str.slice(i, length + i));
                i += length - 1;
                elementLength = '';
            } else {
                elementLength += str[i];
            }
            i += 1;
        }
        return decoded;
    }
}