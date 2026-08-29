class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const closeMatch = {
            ')': '(',
            '}': '{',
            ']': '[',
        };
        
        const stack = [];
        
        for (const bracket of s) {
            if (closeMatch[bracket]) {
            if (stack.length > 0 && stack[stack.length - 1] === closeMatch[bracket]) {
                stack.pop();
            } else {
                return false;
            }
            } else {
            stack.push(bracket);
            }
        }
        
        return stack.length === 0;
    }
}
