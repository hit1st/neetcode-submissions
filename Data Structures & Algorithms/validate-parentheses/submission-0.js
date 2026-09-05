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

        for (let i = 0; i < s.length; i += 1) {
            if (isOpenBracket(s[i])) stack.push(s[i]);
            if (i > 0 && matchClose[stack[stack.length - 1]] === s[i]) stack.pop();
        }

        return stack.length === 0;
    }
}
