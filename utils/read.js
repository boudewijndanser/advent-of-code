import { readFileSync } from 'fs'

export const readFile =(input) => {
  try {
    const data = readFileSync(input, 'utf8')
    return data
  } catch (err) {
    console.error(err)
  }
}