import run from "aocrunner"

const filterOutEmptyStrings = (inputArray) => inputArray.filter(Boolean);

const parseInput = (rawInput) => rawInput

const cleanUpScratchCards = (line) => {
  const output = {
    score: 0,
    matches: 0,
    winners: [],
    yours: []
  }
  const withoutCard = line.split(': ')[1]
  const [winners, yours] = withoutCard.split('|')

   output.winners = filterOutEmptyStrings(winners.split(' '))
   output.yours = filterOutEmptyStrings(yours.split(' '))

  return output
}

const cards = (input) => {
  return input.map((line) => {
    const card = cleanUpScratchCards(line);

    return card;
  });
};



const countWinnersPerCard = (input) => {
  const output = [];

  input.forEach((card) => {
    card.matches = card.yours.filter(value => card.winners.includes(value))

    output.push(card);
  });

  // console.log('-> countWinnersPerCard: ', output);

  return output;
};



const calculateScorePerCard = (input) => {
  const output = []

  input.forEach((card) => {
    if(card.matches && card.matches.length > 0) {

      let tmpScore = 1
      let matchesMinusFirst = card.matches.slice(1)

      matchesMinusFirst.forEach((match) => {
        tmpScore = tmpScore*2
      })
      card.score = tmpScore
    }
    output.push(card)

  })

  // console.log('-> calculateScorePerCard: ', output)

  return output
}

const calculateTotalScore = (input) => {
  let output = 0


  input.forEach((card) => {
    output = output + card.score
  })

  console.log('-> calculateTotalScore: ', output)

  return output
}

const part1 = (rawInput) => {
  const input = parseInput(rawInput)
  .split('\n')
  .filter((line) => line.length > 0 )

  const cleanCards = cards(input)
  const winnerPerCard = countWinnersPerCard(cleanCards)
  const scorePerCard = calculateScorePerCard(winnerPerCard)
  const totalScore = calculateTotalScore(scorePerCard)

  return totalScore
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
        expected: 25231,
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
