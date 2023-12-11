

export const startingPoint = (input, startingCharacter) => {
  let y = input.findIndex(row => row.includes(startingCharacter));
  if (y !== -1) {
    let x = input[y].indexOf(startingCharacter);
    return { x, y };
  }
};

// Map / cell helpers 

export const isStringInArray = (string, array) => array.some(value => string.includes(value))
  

export const southArray = ['|', 'L', 'J']

export const northArray = ['I', 'F', '7']

export const setDirection = (grid, startPoint) => {
  const { x, y } = startPoint

  const oneUp = y -1
  const oneDown = y +1
  let direction = 'west'

  const oneDownValue = grid[oneDown][x]
  const oneUpValue = grid[oneUp][x]

  if (isStringInArray(oneDownValue, southArray)) {
    let foundCharacter = grid[oneDown][x]

    direction = 'south'
  }

  if (isStringInArray(oneUpValue, northArray)) {
    let foundCharacter = grid[oneUp][x]

    direction = 'north'
  }

  return direction
}

export const newDirection = (x, y) => {

  if (y === 1) return 'south'
  if (y === -1) return 'north'
  if (x === 1) return 'east'
  if (x === -1) return 'west'

}

export const calculateNewPosition = (direction, currentValue) => {
  let newX = 0;
  let newY = 0;

  if (direction === 'south') {
    if (currentValue === '|') {
      newY = 1;
    }
    if (currentValue === 'L') {
      newX = 1;
    }
    if (currentValue === 'J') {
      newX = -1;
    }
  }

  if (direction === 'north') {
    if (currentValue === '|') {
      newY = -1;
    }
    if (currentValue === '7') {
      newX = -1;
    }
    if (currentValue === 'F') {
      newX = 1;
    }
  }

  if (direction === 'west') {
    if (currentValue === '-') {
      newX = -1;
    }
    if (currentValue === 'F') {
      newY = 1;
    }
    if (currentValue === 'L') {
      newY = -1;
    }
  }

  if (direction === 'east') {
    if (currentValue === '-') {
      newX = 1;
    }
    if (currentValue === 'J') {
      newY = -1;
    }
    if (currentValue === '7') {
      newY = 1;
    }
  }

  return { newX, newY };
};
