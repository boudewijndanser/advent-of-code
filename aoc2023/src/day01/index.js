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
  
  return output
}

const addAllNumbers = (input) => {
  let output = []

  const initialValue = 0
  output = input.reduce((acc, cur) => acc + cur, initialValue)

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


const extractAll = (raw) => {
  let output = []

  raw.map((line) => {
    output.push(convertWordNumbersToDigits(findAllNumbers(line)))
  })

  return output
}


const part2 = (rawInput) => {

  const inputFile = reader('src/day01/input.txt');
  const data = parseInput(inputFile);

  const all = extractAll(data)

  const findAll = data.map((da) => { return findAllNumbers(da) })
  const firstAndLast = getFirstAndLast(all)

  const final2 = addAllNumbers(firstAndLast)

  return final2
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
      {
        input: 'src/day01/input.txt',
        expected: 53389,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});


const findAllNumbers = (str) => {
  const numberWords = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const matches = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const substring = str.substring(i, j);

      if (numberWords.includes(substring.toLowerCase())) {
        matches.push(substring.toLowerCase());
      } else if (/^\d+$/.test(substring)) {
        matches.push(...substring.split('').map(Number));
      }
    }
  }

  // Add individual trailing numeric digits
  if (/^\d+$/.test(str)) {
    matches.push(...str.split('').map(Number));
  }

  return matches;
}

const convertWordNumbersToDigits = (arr) => {
  const wordToDigitMap = {
      'zero': 0,
      'one': 1,
      'two': 2,
      'three': 3,
      'four': 4,
      'five': 5,
      'six': 6,
      'seven': 7,
      'eight': 8,
      'nine': 9
  };

  // Map function to convert word numbers to digits
  const convertToDigit = (element) => {
      if (typeof element === 'string' && wordToDigitMap.hasOwnProperty(element)) {
          return wordToDigitMap[element]
      }
      return element
  };

  // Use map to apply the conversion to each element in the array
  const result = arr.map(convertToDigit)

  return result
}


