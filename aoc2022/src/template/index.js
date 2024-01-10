import run from "aocrunner"
import { readFile } from '../../../utils/read.js'

const testing = true
const dataSelector = testing 
  ? readFile('../aoc2022/src/day01/example.txt')
  : readFile('../aoc2022/src/day01/input.txt')

  const expexted1 = testing 
  ? 10
  : 100

  const expexted2 = testing 
  ? 20
  : 200

  console.log('--- Title of today ---')
  console.log('')

const parseInput = (rawData) => {
 const output = rawData
  
 return output
}

const part1 = (data) => {
  const input = parseInput(dataSelector)

  console.log('---> input: ')
  console.log(input)

  const answer1 = ''
  return answer1
}

const part2 = (data) => {
  const input = parseInput(dataSelector)
  const answer2 = ''
  return answer2
}

run({
  part1: {
    tests: [
      {
        input: ``,
        expected: expexted1,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: ``,
        expected: expexted2,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
