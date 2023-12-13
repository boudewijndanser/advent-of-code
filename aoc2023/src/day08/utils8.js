export const returnInstructions = (string) => {

    let output = []
    
    string.split('').map((character) => {
      if (character === 'L') output.push(0)
      if (character === 'R') output.push(1)
    })
  
    return output
}
  
export const returnNodes = (stringArray) => {
    let output = []

    stringArray.map((string) => {
        const [label, destinations] = string.split(' = ')
        const fixedDestinations = destinations.match(/\((.*?)\)/)[1].split(',').map(item => item.trim());

        const returnObject = {
            label,
            destinations: fixedDestinations
        }

        output.push(returnObject)
    })

    return output
}

export const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))

export const lcm = (a, b) => (a * b) / gcd(a, b)