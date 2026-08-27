class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const operator = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => Math.trunc(a / b),
        }
        
        for (const token of tokens) {
            if (token === '+' || token === '-' || token === '*' || token === '/') {
            const operand1 = stack.pop();
            const operand0 = stack.pop();
            
            stack.push(operator[token](operand0, operand1));
            } else {
            stack.push(parseInt(token, 10));
            }
        }
        return stack.pop();
    }
}
