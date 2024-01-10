import run from "aocrunner"
import { readFile } from '../../../utils/read.js'

const testing = false
const dataSelector = testing 
  ? readFile('../aoc2022/src/day02/example.txt')
  : readFile('../aoc2022/src/day02/input.txt')

const expexted1 = testing 
  ? 15
  : 14531

const expexted2 = testing 
  ? 12
  : 11258

console.log('--- Rock Paper Scissors ---')
console.log('')

const parseInput = (rawData) => {
const output = rawData.split('\n').map(line => line.trim());
  
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

const scoreOne = (data) => {

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

  const answer1 = scoreOne(input)

  return answer1
}

const outcomeMap = {
  X: 'lose',
  Y: 'draw',
  Z: 'win'
}

let forceOutcome = {
  rock: {
    lose: 'Z', // scissors
    win: 'Y', // paper
    draw: 'X' // rock
  },
  paper: {
    lose: 'X', // rock
    win: 'Z', // scissors
    draw: 'Y' // paper
  },
  scissors: {
    lose: 'Y', // paper
    win: 'X', // rock
    draw: 'Z' // scissors
  }
}

const scoreTwo = (data) => {

  let score = 0
  let games = data.map(game => game.split(' '))

  games.map(([p1Letter, p2Letter]) => {
    
    const forced = outcomeMap[p2Letter];
    
    const player1Shape = letterToShape(p1Letter);
    
    const p2NewLetter = forceOutcome[player1Shape][forced];
    
    const player1 = elfValues[p1Letter];
    
    const player2 = humanValues[p2NewLetter];
    const player2Shape = letterToShape(p2NewLetter);
    
    score += calculateScore(player2Shape, player1Shape);
    score += player2;

  })

  return score
}


const part2 = (data) => {
  const input = parseInput(dataSelector)
  
  const answer2 = scoreTwo(input)

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




