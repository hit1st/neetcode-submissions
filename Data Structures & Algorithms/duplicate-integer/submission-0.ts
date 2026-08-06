class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const alreadySeen = new Set<number>;

        for (let i:number = 0; i < nums.length; i += 1) {
            if (alreadySeen.has(nums[i])) return true;
            alreadySeen.add(nums[i]);
        }

        return false;
    }
}
