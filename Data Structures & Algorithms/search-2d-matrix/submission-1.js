class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        let tRow = 0;
        let bRow = ROWS - 1;


        while (tRow <= bRow) {
            const mRow = Math.floor((tRow + bRow) / 2);
            const midRow = matrix[mRow];

            if (target > midRow[COLS - 1]) {
                tRow = mRow + 1;
            } else if (target < midRow[0]) {
                bRow = mRow - 1;
            } else {
                break;
            }
        }

        if (tRow !== bRow) return false;
        
        const row = matrix[tRow];
        let l = 0;
        let r = COLS - 1;

        while (l <= r) {
            const m = Math.floor((l + r) / 2);

            if (target === row[m]) return true;
            if (target > row[m]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return false;
    }
}
