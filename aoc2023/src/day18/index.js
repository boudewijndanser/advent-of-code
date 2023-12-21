import run from "aocrunner"

const parseInput = (rawInput) => {

  const output = rawInput
    .split('\n') 
    .filter(line => true)
    .map(line => line.split(' '))

  return output

}

export const directions = {
  L: [-1, 0],
  R: [1, 0],
  U: [0, -1],
  D: [0, 1],
}

export const digger = (instructions) => {

  let currentPosition = [0,0]
  const trenches = []

  instructions.map(([direction, distance]) => {

    const [directionX, directionY] = directions[direction]

    let newY = currentPosition[1] + directionY * distance
    let newX = currentPosition[0] + directionX * distance
    
    currentPosition = [newX, newY]

    trenches.push(currentPosition)

    }
  )

  return trenches

}

  // https://en.wikipedia.org/wiki/Shoelace_formula

export const shoelaceMagic = (coordinates) => {

  let total = 0
  let length = 0

  coordinates.map((currentPosition, index) => {
    const nextPosition = coordinates[index + 1] || coordinates[0]

    const [x, y] = currentPosition
    const [newX, newY] = nextPosition

    total += x * newY - y * newX
    length += Math.abs(x - newX) + Math.abs(y - newY)

    }
  )

    let fixedTotal = total / 2
    let fixedLength = length / 2

  const magic = fixedTotal + fixedLength +1

  return magic

}

export const numberToDirection = (input) => {

  let output = ''

  if(input == 0) output = 'R'
  if(input == 1) output = 'D'
  if(input == 2) output = 'L'
  if(input == 3) output = 'U'

  return output

}


const part1 = (rawInput) => {

  const input = parseInput(rawInput)
  const trenches = digger(input)

  const answer1 = shoelaceMagic(trenches)

  return answer1

}

const parseInput2 = (rawInput) => {

  const output = rawInput
    .split('\n')
    .map(line => line.split('#')[1])
    .map((string) => string.slice(0, -1))
    .map(final => {
      
      const numberPart = final.slice(0, -1)
      const directionNumber = final.slice(-1)

      const parsedNumber = parseInt(numberPart, 16)

      const outputArray = [0, 0]

      outputArray[0] = numberToDirection(directionNumber)
      outputArray[1] = parsedNumber

      return outputArray
      
      }
    )

  return output

}

const part2 = (rawInput) => {

  const input2 = parseInput2(rawInput)
  const trenches2 = digger(input2)

  const answer2 = shoelaceMagic(trenches2)

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
