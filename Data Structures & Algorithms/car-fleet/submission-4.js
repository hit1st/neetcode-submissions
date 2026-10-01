class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = position
            .map((p, i) => [p, speed[i]])
            .sort((a, b) => b[0] - a[0]);

        console.log('cars.map(): ', cars.map(([p, s]) => (target - p) / s));

        const stack = [];
        
        for (const [p, s] of cars) {
            stack.push((target - p) / s);
            if (stack.length > 1 && stack[stack.length - 1] <= stack[stack.length - 2]) stack.pop();
        }

        return stack.length;
    }
}
