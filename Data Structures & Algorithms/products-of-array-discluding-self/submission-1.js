class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // brute force nested loop
        // return nums.map((_, i) => {
        //     return nums.reduce((acc, num, j) => {
        //         if (i === j) return acc;
        //         return acc * num;
        //     }, 1);
        // })
        let isThereAZero = false;
        const totalProduct = nums.reduce((prod, num) => {
            if (num === 0) isThereAZero = true
            return num === 0 ? prod : prod * num;
        }, 1);
        
        return nums.map((num) => num === 0 ? totalProduct : isThereAZero ? 0 : totalProduct / num);
    }
}
