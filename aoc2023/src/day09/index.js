import run from "aocrunner"

const parseInput = (rawInput) => { 
  const output = rawInput
    .split('\n') 
    .filter(line => true)
    .map(line => line.split(' '))

  return convertStringsToNumbers(output)
}

const convertStringsToNumbers = (array) => array.map(innerArray => innerArray.map(string => parseInt(string, 10)))
const calculateDifference = (pointA, pointB) => pointB - pointA


const part1 = (rawInput) => {
  const input = parseInput(rawInput)
  
  

  const generateDifferences = (array) => {
    const output = []

    array.map((item, index, array) => {

      if(index != 0){
        const previous = array[index - 1]
        const difference = calculateDifference(previous, item)

        output.push(difference)
      }

    })
    
    return output
  }


  const allSequences = (array) => {
    const sequences = []
    sequences.push(array)
  
    // Use map to generate the subsequent arrays
    array.map((_, index) => {
      if (index < array.length - 2) {
        sequences.push(generateDifferences(sequences[index]))
      }
    });
  
    return sequences
  };


  const completeSequence = (sequences) => sequences.reduce((acc, curr) => acc + curr[curr.length - 1], 0)

  const answer1 = (input) => {
    let theFuture = 0
  
    input.forEach((line) => {
      const sequences = allSequences(line)
      theFuture = theFuture + completeSequence(sequences)
    });
  
    return theFuture
  };

  const answer = answer1(input)

  return answer
}




const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

run({
  part1: {
    tests: [
      {
        input: ``,
        expected: 1681758908,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: ``,
        expected: 2,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
