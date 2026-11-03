class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        // DFS
        // declare a maxArea = 0;
        // define a countArea helper function to run recursively in our DFS
        // loop through grid
            // if (grid[r][c] === 0) {
                //  continue
            // }
            // const currArea = countArea(r, c, visited);
            // maxArea = Math.max(maxArea, currArea)
        // return maxArea;

        const ROWS = grid.length;
        const COLS = grid[0].length;

        let maxArea = 0;

        const countArea = (row, col) => {
            if (
                row < 0 ||
                row === ROWS ||
                col < 0 ||
                col === COLS ||
                grid[row][col] === 0
            ) return 0;
            grid[row][col] = 0;
            return (1 + 
                countArea(row - 1, col) +
                countArea(row, col + 1) +
                countArea(row + 1, col) +
                countArea(row, col - 1)
            );
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                maxArea = Math.max(maxArea, countArea(r, c));
            }
        }

        return maxArea;
    }
}
