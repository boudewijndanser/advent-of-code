import run from "aocrunner"
import { readFile } from '../../../utils/read.js'

const testing = false
const dataSelector = testing 
  ? readFile('../aoc2022/src/day01/example.txt')
  : readFile('../aoc2022/src/day01/input.txt')

const parseInput = (rawData) => {
 const output = rawData.trim().split('\n')

 return output
}

const createGroups = (input) => {
  let groups = []
  let current = []

  input.forEach(line => {
    if(line.trim() !== '') {
      current.push(line)
    } else {
      if(current.length > 0) {
        groups.push(current.join(' '))
        current = []
      }
    }
  })

  if (current.length > 0) {
    groups.push(current.join(' '));
  }

  return groups
}

const convertGroups = (input) => {
  let output = []

  input.map((group) => {
    let pushBack = group.split(' ').map(item => parseInt(item))

    output.push(pushBack)
  })

  return output
}

const sumGroups = (input) => {
  const output = []
  
  input.map((group) => {
    let summed = group.reduce((acc, cur) => acc + cur, 0)

    output.push(summed)
  })

  return output
}


const part1 = (data) => {

  const input = parseInput(dataSelector)

  let groups = createGroups(input)
  let converted = convertGroups(groups)

  let sums = sumGroups(converted).sort((a,b) => b - a)
  
  const answer1 = sums[0]

  return answer1
}

const part2 = (data) => {

  const input = parseInput(dataSelector)

  let groups2 = createGroups(input)
  let converted2 = convertGroups(groups2)

  let sums2 = sumGroups(converted2).sort((a,b) => b - a)

  let top3 = sums2.slice(0,3)
  
  const answer2 = top3.reduce((acc, cur) => acc + cur, 0)
  
  return answer2
}

run({
  part1: {
    tests: [
      {
        input: ``,
        expected: 67622,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: ``,
        expected: 201491,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
