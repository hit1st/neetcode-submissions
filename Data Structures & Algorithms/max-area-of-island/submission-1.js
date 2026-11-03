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

        const countArea = (row, col, visited = new Set()) => {
            visited.add(`${row},${col}`);
            let area = 1;
            // check top
            if (row > 0 && !visited.has(`${row - 1},${col}`) && grid[row - 1][col] === 1) {
                area += countArea(row - 1, col, visited);
            }
            // check right
            if (col < COLS - 1 && !visited.has(`${row},${col + 1}`) && grid[row][col + 1] === 1) {
                area += countArea(row, col + 1, visited);
            }
            // check bottom
            if (row < ROWS - 1 && !visited.has(`${row + 1},${col}`) && grid[row + 1][col] === 1) {
                area += countArea(row + 1, col, visited);
            }
            // check left
            if (col > 0 && !visited.has(`${row},${col - 1}`) && grid[row][col - 1] === 1) {
                area += countArea(row, col - 1, visited);
            }

            return area;
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 0) {
                    continue;
                }

                const currArea = countArea(r, c);
                maxArea = Math.max(maxArea, currArea);
            }
        }

        return maxArea;
    }
}

[
    [0,0,1,0,0,0,0,1,0,0,0,0,0]
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]
]
