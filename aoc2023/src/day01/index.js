import run from 'aocrunner';
import { reader } from '../utils/read.js'


const parseInput = (inputFile) => {
  return inputFile;
};


const extractNumbers = (input) => {
  let output = []
  
  input.map((item) => {
    let strippedOfLetters = item.replace(/[^0-9]/g, "")
    output.push(strippedOfLetters)
  })
  
  console.log(output)
  return output
} 

const getFirstAndLast = (input) => {
  let output = []
  
  input.map((item) => {
    let first = item.slice(0,1)
    let last = item.slice(-1)
    let firstAndLast = `${first}${last}`
    
    output.push(parseInt(firstAndLast))
  })
  
  console.log(output)
  return output
}

const addAllNumbers = (input) => {
  let output = []

  const initialValue = 0
  output = input.reduce((acc, cur) => acc + cur, initialValue)

  console.log(output)
  return output
}
const part1 = (rawInput) => {

  const inputFile = reader('src/day01/input.txt');
  const data = parseInput(inputFile);
  const extracted = extractNumbers(data)
  const firstAndLast = getFirstAndLast(extracted)
  const finalResult = addAllNumbers(firstAndLast)

  return finalResult
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);

  return;
};

run({
  part1: {
    tests: [
      {
        input: 'src/day01/input.txt',
        expected: 54338,
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
});
