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
  
    console.log('');
    console.log('-> Games: ',games)
    console.log('');
    console.log('-> PossibleGames: ',possibleGames)

    return addedNumberOfPossible;
  };
  

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
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
