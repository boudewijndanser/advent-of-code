
export const onTheGrid = (grid, row, column) => {

    let rows = grid.length -1
    let columns = grid[0].length -1
  
    let output = (row >= 0 && row <= rows ) && (column >= 0 && column <= columns)
  
    return output
}

export const startingPoint = (grid, startingCharacter) => {
    let y = grid.findIndex(row => row.includes(startingCharacter))
    if (y !== -1) {
      let x = grid[y].indexOf(startingCharacter)
      return { x, y }
    }
  }