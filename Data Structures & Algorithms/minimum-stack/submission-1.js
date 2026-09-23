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
        const length = this.min.length;
        if (length > 0) this.min.push(Math.min(val, this.min[length - 1]));
        else this.min.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.min.pop();
        return this.stack.pop();
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
