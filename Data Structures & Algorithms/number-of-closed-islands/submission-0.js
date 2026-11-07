class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    closedIsland(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        let islands = 0;

        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
        const flood = (row, col) => {
            grid[row][col] = 1;

            for (let [dr, dc] of directions) {
                const nr = row + dr;
                const nc = col + dc;
                
                if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && grid[nr][nc] === 0) flood(nr, nc);
            }
        };

        for (let r = 0; r < ROWS; r++) {
            if (r > 0 && r < ROWS - 1) continue;
            for (let c = 0; c < COLS; c++) {
                if (c > 0 && c < COLS - 1) continue;
                if (grid[r, c] === 1) continue;
                flood(r, c);
            }
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (r === 0 || r === ROWS - 1 || c === 0 || c === COLS - 1 || grid[r][c] === 1) continue;
                flood(r, c);
                islands++
            }
        }

        return islands;
    }
}
