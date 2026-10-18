class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const times = position
            .map((pos, i) => [pos, speed[i]])
            .sort((a, b) => b[0] - a[0])
            .map(([p, s]) => Math.floor((target - p) / s));

        const stack = [];

        for (const t of times) {
            stack.push(t);
            if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) stack.pop();
        }

        return stack.length;
    }
}
