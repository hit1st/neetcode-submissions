class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const closeMatch = {
            ')': '(',
            '}': '{',
            ']': '['
        }

        for (const bracket of s) {
            if (Object.hasOwn(closeMatch, bracket) && stack[stack.length - 1] === closeMatch[bracket]) stack.pop();
            else stack.push(bracket);
        }
        return stack.length === 0;
    }
}
