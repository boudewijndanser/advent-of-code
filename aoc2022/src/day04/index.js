import run from "aocrunner"
import { readFile } from '../../../utils/read.js'

const testing = false
const dataSelector = testing 
  ? readFile('../aoc2022/src/day04/example.txt')
  : readFile('../aoc2022/src/day04/input.txt')

const expexted1 = testing 
  ? 2
  : 538

const expexted2 = testing 
  ? 2
  : 200

console.log('--- Camp Cleanup ---')
console.log('')

const parseInput = (rawData) => {
 const output = rawData
 .trim()
 .split('\n')
 .map((line) =>
   line.split(',').map((section) => {
     let [start, end] = section.split('-')
     let useStart = parseInt(start)
     let useEnd = parseInt(end)

     return { 
      start: useStart, 
      end: useEnd
    }
   })
 )
  
 return output
}

const hasOverlap = (sections1, sections2) => {
  let output = false

  if (sections2.start <= sections1.start && sections2.end >= sections1.end) {
    output = true
  }

  if (sections1.start <= sections2.start && sections1.end >= sections2.end) {
    output = true
  }

  return output
}

const sumOverlaps = (input) => {
  let output = 0

  input.map((sections) => {
    let [first, second] = sections

    if (hasOverlap(first, second)) {
      output += 1
    }
  })

  return output
}

const part1 = (data) => {
  const input = parseInput(dataSelector)

  const answer1 = sumOverlaps(input)
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
