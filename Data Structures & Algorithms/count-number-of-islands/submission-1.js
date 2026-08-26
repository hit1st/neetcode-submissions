class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const rows = grid.length;
        const  cols = grid[0] ? grid[0].length : 0;
        let islands = 0;
        
        const flood = (row, col) => {
            grid[row][col] = '0';
            
            // check top
            if (row > 0 && grid[row - 1][col] === '1') flood(row - 1, col);
            // check right
            if (col + 1 < cols && grid[row][col + 1] === '1') flood(row, col + 1);
            // check bottom
            if (row + 1 < rows && grid[row + 1][col] === '1') flood(row + 1, col);
            // check left
            if (col > 0 && grid[row][col - 1] === '1') flood(row, col - 1);
        };
        
        for (let row = 0; row < rows; row += 1) {
            for (let col = 0; col < cols; col += 1) {
            if (grid[row][col] === '0') continue;
            
            flood(row, col);
            islands += 1;
            }
        }
        
        return islands;
    }
}
