class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const operators = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => Math.floor(a / b),
        }

        const stack = [];

        for (const token of tokens) {
            if (
                token === '+' ||
                token === '-' ||
                token === '*' ||
                token === '/'
            ) {
                const operand2 = stack.pop();
                const operand1 = stack.pop();
                stack.push(operators[token](operand1, operand2));
            } else {
                stack.push(parseInt(token));
            }
        }

        return stack.pop();
    }
}
