class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const stack = [];

        const cars = position.map((pos, i) => [pos, speed[i]])
            .sort((a, b) => b[0] - a[0])

        for (const [pos, vel] of cars) {
            stack.push((target - pos) / vel);
            if (stack.length > 1 && stack[stack.length - 1] <= stack[stack.length - 2]) stack.pop();
        }

        return stack.length;
    }
}
