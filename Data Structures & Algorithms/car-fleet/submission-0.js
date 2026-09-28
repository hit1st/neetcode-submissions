class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const stack = [];

        const times = position.map((pos, i) => [pos, speed[i]])
            .sort((a, b) => b[0] - a[0])
            .map(([pos, vel]) => (target - pos) / vel);

        for (const time of times) {
            stack.push(time);
            if (stack.length > 1 && stack[stack.length - 1] === stack[stack.length - 2]) stack.pop();
        }

        return stack.length;
    }
}
