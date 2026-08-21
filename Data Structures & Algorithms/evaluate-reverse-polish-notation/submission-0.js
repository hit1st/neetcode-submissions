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
        };

        for (const s of tokens) {
            if (
                s === '+' || s === '-' || s === '*' || s === '/'
            ) {
                const operand2 = stack.pop();
                const operand1 = stack.pop();

                stack.push(operator[s](operand1, operand2));
            } else {
                stack.push(parseInt(s));
            }
        }

        return stack.pop();
    }
}
