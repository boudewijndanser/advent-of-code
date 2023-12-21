import run from "aocrunner"

const parseInput = (rawInput) => {

  const output = rawInput
    .split('\n') 
    .filter(line => true)
    .map(line => line.split(''))

  return output

}

const tiltPlatform = (grid, rowIndex, columnIndex) => {

  // Base case: stop if we reach the top row or encounter a non-empty cell above
  if (rowIndex === 0 || grid[rowIndex - 1][columnIndex] !== '.') {
    return
  }

  // Move 'O' upward
  grid[rowIndex][columnIndex] = '.'
  grid[rowIndex - 1][columnIndex] = 'O'

  // Recursively move 'O' further up
  tiltPlatform(grid, rowIndex - 1, columnIndex)
}

const adjustGrid = (grid) => {
  for (let rowIndex = 1; rowIndex < grid.length; rowIndex++) {
    for (let columnIndex = 0; columnIndex < grid[rowIndex].length; columnIndex++) {
      const currentValue = grid[rowIndex][columnIndex]

      if (currentValue === 'O') {
        // Start recursive upward movement
        tiltPlatform(grid, rowIndex, columnIndex)
      }
    }
  }

  return grid
}

const formatGrid = (grid) => {
  return grid.map(row => row.join('')).join('\n')
}

const calculateTotalRowsBelow = (grid) => {

  const totalRowCount = Array(grid[0].length).fill(0)

  for (let columnIndex = 0; columnIndex < grid[0].length; columnIndex++) {
    for (let rowIndex = grid.length - 1; rowIndex >= 0; rowIndex--) {
      if (grid[rowIndex][columnIndex] === 'O') {

        for (let index = rowIndex; index < grid.length; index++) {
          totalRowCount[columnIndex]++;
        }
      }
    }
  }

  // Sum the counts
  const totalRowsBelow = totalRowCount.reduce((sum, count) => sum + count, 0)

  return totalRowsBelow
};


const part1 = (rawInput) => {

  const input = parseInput(rawInput)
  const adjustedGrid = adjustGrid(input)

  const rowCounts = calculateTotalRowsBelow(adjustedGrid)

  const answer1 = rowCounts
  return answer1
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  const answer2 = ''
  return answer2
}

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
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
