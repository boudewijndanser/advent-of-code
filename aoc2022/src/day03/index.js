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
  : 2515

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

  const answer1 = priorities.reduce((acc, cur) => {return acc + cur},0)

  return answer1
}


const getGroupsof3 = (input) => {

  const result = input.map((currentValue, index, array) => {
    if (index % 3 === 0) {
      // Collect values in groups of three
      const group = array.slice(index, index + 3)

      return group
    }

  })

  const groupedArrays = result.filter((group) => group)

  return groupedArrays
}

const findSharedItems2 = (input) => {

  let shared = []

  input.forEach((rucksack) => {

    const left = rucksack[0]
    const right = rucksack[1]
    const center = rucksack[2]

    const compartment1 = [...new Set(left)]
    const compartment2 = [...new Set(right)]
    const compartment3 = [...new Set(center)]

    const overlap = [...compartment1].filter((item) => compartment2.includes(item) && compartment3.includes(item))
    
    shared.push(overlap)
  })

  let unique = [...new Set(shared)].flat()

  return unique
}


const part2 = (data) => {

  const input = parseInput(dataSelector)

  const groupsOf3 = getGroupsof3(input)
  const shared = findSharedItems2(groupsOf3)
  const priorities = shared.map((item) => getPriority(item))

  const answer2 = priorities.reduce((acc, cur) => {return acc + cur},0)
  
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
