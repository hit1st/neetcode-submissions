class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        let t = 0;
        let b = ROWS - 1;

        while (t < b) {
            const mr = Math.floor((t + b) / 2);
            const mRow = matrix[mr];

            if (target < mRow[0]) {
                b = mr - 1;
            } else if (target > mRow[COLS - 1]) {
                t = mr + 1
            } else {
                break;
            }
        }

        if (!(t <= b)) return false;

        const nums = matrix[Math.floor((t + b) / 2)];

        let l = 0;
        let r = COLS - 1;

        while (l <= r) {
            const m = Math.floor((l + r) / 2);

            if (target > nums[m]) {
                l = m + 1;
            } else if (target < nums[m]) {
                r = m - 1;
            } else {
                return true;
            }
        }

        return false;
    }
}
