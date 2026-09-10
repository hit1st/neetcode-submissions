class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const prefix = [];
        const suffix = [];
        let contained = 0;

        let preMax = 0;
        for (let i = 0; i < height.length; i += 1) {
            preMax = Math.max(preMax, height[i])
            prefix[i] = preMax;
        }

        let sufMax = 0;
        for (let i = height.length - 1; i >= 0; i -= 1) {
            sufMax = Math.max(sufMax, height[i])
            suffix[i] = sufMax;
        }

        for (let i = 0; i < height.length; i += 1) {
            contained += (Math.min(prefix[i], suffix[i]) - height[i]);
        }

        return contained;
    }
}
