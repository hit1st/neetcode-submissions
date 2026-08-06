class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const arr: number[][] = nums.map((num, i) => [num, i]);

        arr.sort((a,b) => a[0] - b[0]);

        let i: number = 0;
        let j: number = nums.length - 1;

        while (i < j) {
            let cur = arr[i][0] + arr[j][0];
            if (cur === target) return [Math.min(arr[i][1], arr[j][1]), Math.max(arr[i][1], arr[j][1])];
            if (cur < target) i += 1;
            if (cur > target) j -= 1;
        }
    }
}
