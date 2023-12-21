export const types = [
    {title: 'empty', score: 0},
    { title: 'High card', score: 0 },
    { title: 'One pair', score: 1 },
    { title: 'Two pair', score: 2 },
    { title: 'Three of a kind', score: 3 },
    { title: 'Full house', score: 4 },
    { title: 'Four of a kind', score: 5 },
    { title: 'Five of a kind', score: 6 }
  ];
  
  export const cardLabels1 = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
  export const cardLabels2 = ['J','2', '3', '4', '5', '6', '7', '8', '9', 'T', 'Q', 'K', 'A'];

  
  export const gradeCard1 = (inputArray) => {
    let maxCount = 0;
    let mostFrequentValue = null;
    let type = {};
  
    for (const searchValue of cardLabels1) {
      const count = inputArray.filter(item => item === searchValue).length;
  
      if (count > maxCount) {
        [mostFrequentValue, maxCount] = [searchValue, count];
      }
    }
  
    const uniqueValues = new Set(inputArray);
  
    // Five of a kind, where all five cards have the same label: QQQQQ
    if (maxCount === 5) {
      type = types[7];
    }
  
    // Four of a kind, where four cards have the same label and one card has a different label: QQQQA
    else if (maxCount === 4) {
      type = types[6];
    }
  
    // Full house, where three cards have the same label, and the remaining two cards share a different label: 23332    
    else if (maxCount === 3 && uniqueValues.size === 2) {
      type = types[5];
    }
  
    // Three of a kind, where three cards have the same label, 
    // and the remaining two cards are each different from any other card in the hand: TTT98
    else if (maxCount === 3 && uniqueValues.size === 3) {
      type = types[4];
    }
  
    // Two pair, where two cards share one label, two other cards share a second label, 
    // and the remaining card has a third label: 23432
    else if (maxCount === 2 && uniqueValues.size === 3) {
        // Check the counts of unique values to ensure it's a Two Pair
        const uniqueCounts = Array.from(uniqueValues).map(value => inputArray.filter(item => item === value).length);
  
    if (uniqueCounts.filter(count => count === 2).length === 2) {
      type = types[3];
    }
  }
  
  // One pair, where two cards share one label, and the other three cards have 
  // a different label from the pair and each other: A23A4
  else if (maxCount === 2 && uniqueValues.size === 4) {
    type = types[2];
  }
  
    // High card, where all cards' labels are distinct: 23456
    else if (maxCount === 1) {
      type = types[1];
    }
    
    return type;
  };

  export const gradeCard2 = (inputArray) => {
    let maxCount = 0;
    let mostFrequentValue = null;
    let type = {};
    let jokers = inputArray.filter(character => character === 'J').length

    for (const searchValue of cardLabels1) {
      const count = inputArray.filter(item => item === searchValue).length;
  
      if (count > maxCount) {
        [mostFrequentValue, maxCount] = [searchValue, count];
      }
    }
  
    const uniqueValues = new Set(inputArray);
  
    // Five of a kind, where all five cards have the same label: QQQQQ
    if (maxCount === 5) {
      type = types[7];
    }
  
    // Four of a kind, where four cards have the same label and one card has a different label: QQQQA
    else if (maxCount === 4) {
      if(jokers > 0){
        // Joker(s) can be used to upgrade this hand to a 'Five of a kind'
        type = types[7]
      } else {
        type = types[6];
      }
    }
  
    // Full house, where three cards have the same label, and the remaining two cards share a different label: 23332    
    else if (maxCount === 3 && uniqueValues.size === 2) {
      if(jokers > 1) {
        // Joker can be used to upgrade to 'Five of a kind'
        type = types[7]

      } else {
        type = types[5];
      }
    }
  
    // Three of a kind, where three cards have the same label, 
    // and the remaining two cards are each different from any other card in the hand: TTT98
    else if (maxCount === 3 && uniqueValues.size === 3) {
      
      if(jokers === 1) {
        // Joker can be used to upgrade to 'Four of a kind'
        type = types[6]
      } else if(jokers === 2) {
        type = types[7]
      } else if (jokers === 3) {
        type = types[6]
      } else {
        type = types[4];
      }
    }
  
    // Two pair, where two cards share one label, two other cards share a second label, 
    // and the remaining card has a third label: 23432
    else if (maxCount === 2 && uniqueValues.size === 3) {
        // Check the counts of unique values to ensure it's a Two Pair
        const uniqueCounts = Array.from(uniqueValues).map(value => inputArray.filter(item => item === value).length);
  
    if (uniqueCounts.filter(count => count === 2).length === 2) {
      if(jokers === 1) {
        // Joker can be used to upgrade to 'Full house'
        type = types[5]
      } else if (jokers === 2) {
        type = types[6]
      }else {
        type = types[3];
      }
    }
  }
  
  // One pair, where two cards share one label, and the other three cards have 
  // a different label from the pair and each other: A23A4
  else if (maxCount === 2 && uniqueValues.size === 4) {
    if(jokers === 1 || jokers === 2) {
      // Joker can be used to upgrade to 'Three of a kind'
      type = types[4]
    } else {
      type = types[2];
    }
  }
  
    // High card, where all cards' labels are distinct: 23456
    else if (maxCount === 1) {
      if(jokers === 1) {
        // Joker can be used to create a pair
        type = types[2]
      } else {
       type = types[1];
      }
    }
    
    return type
  };

  export const createHandObjects = (hands) => {
    const output = []

    hands.map((item) => {
      const handObject = {
        bid: 0,
        rank: 0,
        hand: [],
        type: null
      }
      
      handObject.bid = parseInt(item.split(' ')[1])
      handObject.hand = item.split(' ')[0].split('')
      handObject.type = gradeCard1(handObject.cards)


      output.push(handObject)
    })

    return output
  }




  export function returnSortedCards(ranking) {
    
    let sorter = function (a, b) {

      if (a.type.score === b.type.score) {

        for (let i = 0; i < 5; i++) {
          if (a.hand[i] !== b.hand[i]) {
            return ranking.indexOf(a.hand[i]) - ranking.indexOf(b.hand[i])
          }
        }

      }
      return a.type.score - b.type.score
    }
    return sorter
  }