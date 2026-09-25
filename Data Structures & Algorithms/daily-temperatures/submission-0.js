class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = Array(temperatures.length).fill(0);
        const stack = []; // pair [temp, index]

        for (let i = 0; i < temperatures.length; i += 1) {
            const t = temperatures[i];
            while (stack.length > 0 && t > stack[stack.length - 1][0]) {
                const [, idx] = stack.pop();
                res[idx] = i - idx;
            }
            stack.push([t, i]);
        }

        return res;
    }
}
