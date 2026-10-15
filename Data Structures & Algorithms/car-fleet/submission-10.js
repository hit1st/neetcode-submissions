class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        // time = (target - position) / speed

        const times = position
            .map((p, i) => [p, speed[i]])
            .sort((a, b) => b[0] - a[0])
            .map(([p, s]) => (target - p) / s);

        console.log('times: ', times);
        const stack = [];

        for (const t of times) {
            stack.push(t);
            if (stack.length > 0 && stack[stack.length - 1] <= stack[stack.length - 2]) stack.pop();
        }
        console.log('stack: ', stack);
        return stack.length;
    }
}
