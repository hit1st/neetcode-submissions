class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // define a output string = '';
        let output = '';
        // loop through strs
        strs.forEach((s) => {
        // define curr = length of string + string + '#'
            const curr = s.length + s + '#';
        // append curr to output;
            output += curr;
        });
        return output;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // define output as empty array;
        const output = [];
        // define currString = '';
        let currString = '';
        let strNum = '';
        let num = 0;
        // loop through string
        let i = 0;

        while (i < str.length) {
            const currChar = str[i];
        //   check if curr char is a number
            if (!Number.isNaN(parseInt(currChar))) {
        //      strNum = strNum + curr;
                strNum = strNum + currChar;
        //      inc index
                i += 1;
            } else {
        //   else 
        //      num = parseInt(strNum);
                num = parseInt(strNum);
                strNum = '';
        //      currString += str.slice(index, index + num + 1)
                currString += str.slice(i, i + num);
        //      check if (str[index + num + 1] === '#'
                if (str[i + num] === '#') {
        //          add currentString to output;
                    output.push(currString);
        //          currString == ''
                    currString = '';
                }
        //      index = index + num + 1 + 1;
                i = i + num + 1;
                num = 0;
            } 
        }
        return output
    }
}
