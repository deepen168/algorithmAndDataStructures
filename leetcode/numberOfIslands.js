const numIslands = (grid) => {
    let counter = 0;
  
    const dfs = (i, j) => {
      if (
        i >= 0 &&
        j >= 0 &&
        i < grid.length &&
        j < grid[i].length &&
        grid[i][j] === '1'
      ) {
        grid[i][j] = '0';
        dfs(i + 1, j); // bottom
        dfs(i, j + 1); // right
        dfs(i - 1, j); // top
        dfs(i, j - 1); // left
      }
    };
  
    for (let i = 0; i < grid.length; i += 1) {
      for (let j = 0; j < grid[i].length; j += 1) {
        if (grid[i][j] === '1') {
          counter += 1;
          dfs(i, j);
        }
      }
    }
  
    return counter;
  };



  const numIslands = (grid) => {
    const isIsland = (i, j) =>
      i >= 0 &&
      i < grid.length &&
      j >= 0 &&
      j < grid[i].length &&
      grid[i][j] === '1';
  
    const bfs = (i, j) => {
      const queue = [[i, j]];
  
      while (queue.length) {
        const [i, j] = queue.shift();
  
        grid[i][j] = '0';
  
        if (isIsland(i + 1, j)) queue.push([i + 1, j]);
        if (isIsland(i, j + 1)) queue.push([i, j + 1]);
        if (isIsland(i - 1, j)) queue.push([i - 1, j]);
        if (isIsland(i, j - 1)) queue.push([i, j - 1]);
      }
    };
  
    let counter = 0;
  
    for (let i = 0; i < grid.length; i += 1) {
      for (let j = 0; j < grid[i].length; j += 1) {
        if (grid[i][j] === '1') {
          counter += 1;
          bfs(i, j);
        }
      }
    }
  
    return counter;
  };