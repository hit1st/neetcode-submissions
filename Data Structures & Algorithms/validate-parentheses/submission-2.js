class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 !== 0) return false;

        const matchClose = {
            '(': ')',
            '{': '}',
            '[': ']',
        }

        const stack = [];

        const isOpenBracket = (bracket) => bracket === '(' || bracket === '{' || bracket === '[';
        const isClosedBracket = (bracket) => bracket === ')' || bracket === '}' || bracket === ']';

        for (let i = 0; i < s.length; i += 1) {
            if (isOpenBracket(s[i])) stack.push(s[i]);
            if (stack.length === 0 && isClosedBracket(s[i])) return false;
            if (isClosedBracket(s[i]) && !(matchClose[stack[stack.length - 1]] === s[i])) return false;
            if (i > 0 &&
                isClosedBracket(s[i]) &&
                matchClose[stack[stack.length - 1]] === s[i]
            ) stack.pop();
        }

        return stack.length === 0;
    }
}
