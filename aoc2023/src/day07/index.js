import run from "aocrunner"
import {gradeCard1, gradeCard2, cardLabels1, cardLabels2, returnSortedCards } from './utils7.js'

const parseInput = (rawInput, version) => {

  return rawInput.trim().split('\n').map(line => {
    const handObject = {
      bid: 0,
      rank: 0,
      hand: [],
      type: null,
    };

    handObject.bid = parseInt(line.split(' ')[1])
    handObject.hand = line.split(' ')[0].split('')
    handObject.type = version === 1 
      ? gradeCard1(handObject.hand) 
      : gradeCard2(handObject.hand)

    return handObject
  });
};


const part1 = (rawInput) => {
 
  const cards = parseInput(rawInput, 1)
  const sorted = cards.sort(returnSortedCards(cardLabels1))

  let answer1 = sorted.reduce((accumulator, card, currentIndex) => accumulator + card.bid * (currentIndex + 1), 0)

  return answer1
}

const part2 = (rawInput) => {

  const cards = parseInput(rawInput, 2)
  const sorted = cards.sort(returnSortedCards(cardLabels2))

  let answer2 = sorted.reduce((accumulator, card, currentIndex) => accumulator + card.bid * (currentIndex + 1), 0)

  return answer2
}

run({
  part1: {
    tests: [
      {
        input: ``,
        expected: 251927063,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: ``,
        expected: 255632664,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
