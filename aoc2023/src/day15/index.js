import run from "aocrunner"

const parseInput = (rawInput) => {

  return rawInput
    .toString()
    .split(',');
}

const hashed = (string) => string
  .split('')
  .reduce((accumulator, current) => (accumulator + current.charCodeAt(0)) * 17 % 256, 0)

  
const part1 = (rawInput) => {
  const input = parseInput(rawInput)

  const answer1 = input
    .map(toHash => hashed(toHash))
    .reduce((accumulator, current) => accumulator + current, 0)


  return answer1
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  const answer2 = ''
  return answer2
}

run({
  part1: {
    tests: [
      {
        input: ``,
        expected: 1320,
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
