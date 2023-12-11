import run from "aocrunner"
import {startingPoint, setDirection, newDirection, calculateNewPosition} from './utils10.js'

const parseInput = (rawInput) => { 
  const output = rawInput
    .split('\n') 
    .filter(line => true)
    .map(line => line.split(''))

  return output
}


const part1 = (rawInput) => {
  const input = parseInput(rawInput)
  const startValue = 'S'
  const start = startingPoint(input, startValue)

  const queue = []
  const visited = []

  let direction = setDirection(input, start) // north | south | east | west
  let currentValue = startValue


  queue.push({x: start.x, y: start.y +1}) // south

  let x = start.x
  let y = start.y + 1
  
  while (x !== start.x || y !== start.y) {
    
    visited.push(queue[0])
    let queed = queue.shift()
    x = queed.x
    y = queed.y

    currentValue = input[y][x]

    const { newX, newY } = calculateNewPosition(direction, currentValue);

    x += newX
    y += newY

    direction = newDirection(newX, newY)
    let newPosition = {x,y}

    queue.push(newPosition) 
  }
  
  let answer = (visited.length + 1) /2

  return answer
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: ,
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

