import run from "aocrunner"
import { readFile } from '../../../utils/read.js'

const testing = false
const dataSelector = testing 
  ? readFile('../aoc2022/src/day06/example.txt')
  : readFile('../aoc2022/src/day06/input.txt')

const expexted1 = testing 
  ? 10
  : 1544

  const expexted2 = testing 
  ? 29
  : 2145

  console.log('--- Tuning Trouble ---')
  console.log('')

const parseInput = (rawData) => {
 const output = rawData
  .toString()
  .trim()
  
 return output
}

const oneOfAKind = (substring, packetLength) => {
  const charSet = new Set(substring)

  return charSet.size === packetLength
}

const findMarker = (input, packetLength) => {
  const lastIndex = input.length - packetLength
  
  for (let currentIndex = 0; currentIndex <= lastIndex; currentIndex++) {
    const substring = input.slice(currentIndex, currentIndex + packetLength)

    if (oneOfAKind(substring, packetLength)) {
      return currentIndex + packetLength
    }
  }

}

const part1 = (data) => {
  const input = parseInput(dataSelector)
 
  const answer1 = findMarker(input, 4)
  return answer1
}

const part2 = (data) => {
  const input = parseInput(dataSelector)

  const answer2 = findMarker(input, 14)
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
