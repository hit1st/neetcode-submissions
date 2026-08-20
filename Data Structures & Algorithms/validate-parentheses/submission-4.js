class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 !== 0) return false;

        const stack = [];
        
        const matchClose = {
            ')': '(',
            '}': '{',
            ']': '[',
        }

        for (const bracket of s) {
            if (!matchClose[bracket]) stack.push(bracket);
            else if (stack.length > 0 && matchClose[bracket] === stack[stack.length - 1]) stack.pop();
            else return false;
        }

        return stack.length === 0;
    }
}
