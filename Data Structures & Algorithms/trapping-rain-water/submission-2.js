class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let contained = 0;
        const prefix = [];
        const suffix = [];

        let maxPre = 0;
        for (let i = 0; i < height.length; i += 1) {
            maxPre = Math.max(maxPre, height[i]);
            prefix[i] = maxPre;
        }

        let maxSuf = 0;
        for (let i = height.length - 1; i >= 0; i -= 1) {
            maxSuf = Math.max(maxSuf, height[i]);
            suffix[i] = maxSuf;
        }

        for (let i = 0; i < height.length; i += 1) {
            contained += (Math.min(prefix[i], suffix[i]) - height[i]);
        }

        return contained;
    }
}
