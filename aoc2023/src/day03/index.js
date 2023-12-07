import run from "aocrunner"

const parseInput = (rawInput) => rawInput

const part1 = (rawInput) => {
  const input = parseInput(rawInput)
    .split('\n')
    .filter(line => true)

  // Helpers
  const extractNumbersFromRow = (row) => Array.from(row.matchAll(/[\d]+/g))
  const isValidCell = (grid, y, x) => grid[y]?.[x] !== undefined
  const isSymbol = (symbol) => /[^.\d]/.test(symbol)

  const processMatchedNumber = (grid, match, y) => {
    const { 0: number, index: x } = match

    return nextToSymbol(grid,y, x, x + number.length - 1) 
      ? parseInt(number) || 0 
      : 0
  }

  const processSchematic = (data) => {
    if (!data || !Array.isArray(data)) {
      console.error("Invalid input. Expected a 2D array...")

      return 0
    }
  
    return data
      .map((row, y) => extractNumbersFromRow(row).map((match) => processMatchedNumber(input, match, y)))
      .reduce((a, b) => a.concat(b), []) // Use concat to flatten the array
      .reduce((a, b) => a + b, 0)
  }

  // Check surrounding positions in the grid
  const nextToSymbol = (grid, row, x1, x2) => {
    const rowsToCheck = [row - 1, row, row + 1]
    const columnsToCheck = [...Array(x2 - x1 + 3).keys()]
      .map((_, i) => x1 - 1 + i)
  
    return rowsToCheck.some(y => {
      return columnsToCheck.some(x => {

        if (isValidCell(grid, y, x)) {
          const symbolInColumn = grid[y][x]
          return isSymbol(symbolInColumn)
        }
        return false
      })
    })
  }

  return processSchematic(input)
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

run({
  part1: {
    tests: [
      {
        input: ``,
        expected: 531561,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
