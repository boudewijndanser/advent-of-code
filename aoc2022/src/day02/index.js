import run from "aocrunner"
import { readFile } from '../../../utils/read.js'

const testing = false
const dataSelector = testing 
  ? readFile('../aoc2022/src/day02/example.txt')
  : readFile('../aoc2022/src/day02/input.txt')

console.log('--- Rock Paper Scissors ---')
console.log('')

const parseInput = (rawData) => {
const output = rawData.split('\n').map(line => line.trim());
  
 return output
}

const letterToValue = (string) => {
  let output = 0

    // Rock
  if (string === 'A' || string === 'X') {
    output = 1
  }
    // Paper
  if (string === 'B' || string === 'Y') {
    output = 2
  }
    // Scissors
  if (string === 'C' || string === 'Z') {
    output = 3
  }

  return output
}

const letterToShape = (string) => {
  let output = ''

  if (string === 'A' || string === 'X') {
    output = 'rock'
  }

  if (string === 'B' || string === 'Y') {
    output = 'paper'
  }

  if (string === 'C' || string === 'Z') {
    output = 'scissors'
  }

  return output
}

const elfValues = {
  A: 1,
  B: 2,
  C: 3
}

const humanValues = {
  X: 1, 
  Y: 2, 
  Z: 3
}

const outcomes = {
  lose: 0,
  win: 6,
  draw: 3
}


const calculateScore = (first, compare) => {
  let output = 0

  if (first === 'rock') {

    if(compare === 'rock') {
      output = outcomes.draw
    }

    if(compare === 'scissors') {
      output = outcomes.win
    }
  }

  if (first === 'paper') {

    if(compare === 'paper') {
      output = outcomes.draw
    }

    if(compare === 'rock') {
      output = outcomes.win
    }
  }

  if (first === 'scissors') {

    if(compare === 'scissors') {
      output = outcomes.draw
    }

    if(compare === 'paper') {
      output = outcomes.win
    }

  }

  return output
}

const scoreTwo = (data) => {

  let score = 0
  let games = data.map(game => game.split(' '))

  games.map(([p1Letter, p2Letter]) => {

    const player1 = elfValues[p1Letter]
    const player2 = humanValues[p2Letter]

    const player1Shape = letterToShape(p1Letter)
    const player2Shape = letterToShape(p2Letter)


    score += calculateScore(player2Shape, player1Shape)
    score += player2

  })

  return score
}


const part1 = (data) => {
  const input = parseInput(dataSelector)

  let answer1 = scoreTwo(input)

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
        expected: 14531,
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




