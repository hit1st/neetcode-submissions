class MinStack {
    constructor() {
        this.stack = [];
        this.min = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        this.min.push(val);
        this.min.sort((a, b) => b - a);
    }

    /**
     * @return {void}
     */
    pop() {
        const num = this.stack.pop();
        this.min.splice(this.min.indexOf(num), 1);
        return num;
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.min.length - 1];
    }
}
