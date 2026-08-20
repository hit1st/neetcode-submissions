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

        for (let i = 0; i < s.length; i += 1) {
            if (!matchClose[s[i]]) stack.push(s[i]);
            else if (stack.length > 0 && matchClose[s[i]] === stack[stack.length - 1]) stack.pop();
            else return false;
        }

        return stack.length === 0;
    }
}
