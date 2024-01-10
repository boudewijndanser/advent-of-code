import run from "aocrunner"
import { readFile } from '../../../utils/read.js'

const testing = false
const dataSelector = testing 
  ? readFile('../aoc2022/src/day03/example.txt')
  : readFile('../aoc2022/src/day03/input.txt')

const expexted1 = testing 
  ? 157
  : 8085

const expexted2 = testing 
  ? 70
  : 1000

console.log('--- Rucksack Reorganization ---')
console.log('')

const parseInput = (rawData) => {
 const output = rawData
  .trim()
  .split('\n')
  .map((line) => line.split(''))
  
 return output
}

const findSharedItems = (input) => {
  let shared = []

  input.forEach((rucksack) => {
    const length = rucksack.length / 2
    const left = rucksack.slice(0, length)
    const right = rucksack.slice(length)

    const compartment1 = [...new Set(left)]
    const compartment2 = [...new Set(right)]

    const overlap = [...compartment1].filter((item) => compartment2.includes(item))
    
    shared.push(overlap)
  })

  let unique = [...new Set(shared)].flat()

  return unique
}

const getPriority = (character) => {

  const output = character === character.toLowerCase()
    ? character.codePointAt(0) - 'a'.codePointAt(0) +1
    : character.codePointAt(0) - 'A'.codePointAt(0) +27

  return output
}


const part1 = (data) => {
  const input = parseInput(dataSelector)

  const shared = findSharedItems(input)
  const priorities = shared.map((item) => getPriority(item))

  console.log('-> priorities: ')
  console.log(priorities)

  const answer1 = priorities.reduce((acc, cur) => {return acc + cur},0)
  
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
