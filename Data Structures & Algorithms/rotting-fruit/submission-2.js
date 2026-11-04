class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        const q = [];
        let time = 0;
        let fresh = 0;

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) {
                    fresh++;
                }
                if (grid[r][c] === 2) {
                    q.push([r, c]);
                }
            }
        }

        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        
        while (fresh > 0 && q.length > 0) {
            const length = q.length;
            for (let i = 0; i < length; i ++) {
                const [currRow, currCol] = q.shift();
                for (const [dr, dc] of directions) {
                    const row = currRow + dr;
                    const col = currCol + dc;
                    if (
                        row >= 0 && row < ROWS &&
                        col >= 0 && col < COLS &&
                        grid[row][col] === 1
                    ) {
                        grid[row][col] = 2;
                        q.push([row, col]);
                        fresh--
                    }
                }
            }
            time++
        }
        return fresh === 0 ? time : -1;
    }
}
