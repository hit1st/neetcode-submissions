class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const isMatch = {
            ')': '(',
            '}': '{',
            ']': '[',
        }

        const stack = [];

        for (const bracket of s) {
            if (!isMatch[bracket]) stack.push(bracket)
            else {
                if (stack[stack.length - 1] === isMatch[bracket]) stack.pop();
                else return false;
            }
        }

        return stack.length === 0;
    }
}
