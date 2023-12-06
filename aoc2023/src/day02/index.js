import run from "aocrunner"
import { reader } from '../utils/read.js'

const parseInput = (rawInput) => rawInput

// Define max colors for red / green / blue
const limits = { 
  red: 12,
  green: 13,
  blue: 14
 }

const part1 = (rawInput) => {

    const inputFromFile = reader('src/day02/input.txt');
  
    // Get data in the right shape
    const mapLineToGames = (line) => {
      return line
        .split(': ')[1]
        .split('; ')
        .map((games) => {
          const hands = games.split(', ')

          return hands.every((pull) => {
            const [count, color] = pull.split(' ')

            return limits[color] >= Number(count)
          });
        });
    };
  
    const games = inputFromFile.map((line) => {
      const games = mapLineToGames(line);

      return games;
    });
    
    // Check if all games in a hand were true
    const possibleGames = games.map((game) => game.every((play) => play));

    // Return the index + 1 of those games and sum them
    const addedNumberOfPossible = possibleGames.reduce((acc, result, i) => {
      return result ? acc + (i + 1) : acc
    }, 0)

    return addedNumberOfPossible;
  };
  

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  const inputFromFile = reader('src/day02/input.txt');
  
    // Get data in the right shape
    const mapLineToGames = (line) => {
      return line
        .split(': ')[1]
        .split('; ')
        .map((games) => {
          const hands = games.split(', ')

          return hands
        });
    };
  
    const games = inputFromFile.map((line) => {
      const games = mapLineToGames(line);

      return games;
    });


    const extractColorValuesFromArrays = (arrays) => {
      return arrays.map(data => extractColorValues(data));
  }
  
  // Extract color values from a single set of input arrays
  const extractColorValues = (data) => {
      const colorValues = {};
  
      data.forEach(subArray => {
          subArray.forEach(item => {
              const [number, color] = item.split(' ');
              const numericValue = parseInt(number);
  
              if (!colorValues[color]) {
                  colorValues[color] = [];
              }
  
              colorValues[color].push(numericValue);
          });
      });
  
      return colorValues;
  }
  
  const resultArray = extractColorValuesFromArrays(games);

  
  const findHighestValuesPerObject = (resultArray) => {
    return resultArray.map(colorValues => {
        const highestValues = {};


        Object.entries(colorValues).forEach(([color, values]) => {
            // Find the highest value for the color
            const highestValue = Math.max(...values);

            highestValues[color] = highestValue;
        });

        return highestValues;
    });
}


const highestValuesPerObject = findHighestValuesPerObject(resultArray);


const multiplyValuesPerObject = (inputArray) => {
  return inputArray.map(colorValues => {
      let multiplicationResult = 1;

      Object.values(colorValues).forEach(value => {

          multiplicationResult *= value;
      });

      return multiplicationResult;
  });
}

const multiplicationResults = multiplyValuesPerObject(highestValuesPerObject);

const sumValues = (inputArray) => {
  return inputArray.reduce((sums, multiplicationResult) => {
      return sums + multiplicationResult;
  }, 0);
}

const totalSum = sumValues(multiplicationResults);


  return totalSum
}

run({
  part1: {
    tests: [
      {
        input: ``,
        expected: 2105,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: ``,
        expected: 72422,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
