class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let contained: number = 0;
        const prefix: number[] = [];
        const suffix: number[] = [];

        let prefixMax: number = 0;
        for (let i: number = 0; i < height.length; i += 1) {
            prefixMax = Math.max(prefixMax, height[i]);
            prefix[i] = (prefixMax);
        }

        let suffixMax: number = 0;
        for (let i: number = height.length - 1; i >= 0; i -= 1) {
            suffixMax = Math.max(suffixMax, height[i]);
            suffix[i] = (suffixMax);
        }

        for (let i: number = 0; i < height.length; i += 1) {
            contained += (Math.min(prefix[i], suffix[i]) - height[i]);
        }

        return contained;
    }
}
