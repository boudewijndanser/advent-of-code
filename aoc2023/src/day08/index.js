import run from "aocrunner"
import { returnInstructions, returnNodes, lcm  } from './utils8.js'

const parseInput = (rawInput) => {

  const [initialInstructions, initialNetwork] = rawInput
    .toString()
    .split('\n\n');

  let instructions = returnInstructions(initialInstructions)
  let nodes = returnNodes(initialNetwork.split('\n'))

  return {nodes, instructions}
}

const followInstructions = (nodes, instructions, startNode, version) => {
  let steps = 0
  let path = []
  let labels = []

  let current = startNode
  let destination1 = 'ZZZ'
  let finished = false;
  let instructionIndex = 0

  while (!finished) {
    let currentIndex = instructions[instructionIndex];
    let currentObject = nodes.find(item => item.label === current)

    labels.push(current)
    path.push(currentObject)


    if (currentObject !== undefined && currentObject.destinations !== undefined && currentObject.destinations[currentIndex] !== undefined && Array.isArray(currentObject.destinations) ) {
      current = currentObject.destinations[currentIndex];
    } else {
      console.error("---> Error: Invalid index or destinations is not an array", currentObject)
      break; // Exit the loop on error
    }

    steps = steps + 1
    instructionIndex = (instructionIndex + 1) % instructions.length

    if (version === 1) {
      finished = current === destination1
    }

    if (version === 2) {
      finished = current[2] === 'Z'
    }
  }

  return steps
};

const part1 = (rawInput) => {
  
  const nodes = parseInput(rawInput).nodes
  const instructions = parseInput(rawInput).instructions

  let answer1 = followInstructions(nodes, instructions, 'AAA', 1)

  return answer1
}

const part2 = (rawInput) => {

  const nodes = parseInput(rawInput).nodes
  const instructions = parseInput(rawInput).instructions
  const starters = nodes.filter((node) => node.label[2] == 'A')

  const totalNodes = starters.map((node) => {
    return followInstructions(nodes, instructions, node.label, 2)
  })

  const answer2 = totalNodes.reduce((acc, curr) => lcm(acc, curr), 1)

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
