import { readFileSync } from 'fs'

export function reader(input) {
  try {
    const data = readFileSync(input, 'utf8');

    const cleanedUp = data
        .toString()
        .split('\n')
        .filter((line) => line.length > 0 )

    return cleanedUp
  } catch (err) {
    console.log(err);
  }
}