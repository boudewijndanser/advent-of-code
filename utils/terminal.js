
export const colorize = (input) => {
    // Your input grid as a 2D array
    //ANSI escape codes for different colors and text formatting

    const colorMap = {
    '.': '\x1b[33m', // yellow
    '#': '\x1b[32m', // green
    '>': '\x1b[31;47m', // White BG
    '<': '\x1b[31;47m', // White BG
    'v': '\x1b[31;47m', // White BG
    'S': '\x1b[34m', // Blue
    }

    const resetColor = '\x1b[0m'; // reset color

    return input.map(row => row.map(symbol => `${colorMap[symbol] || '\x1b[37m'}${symbol}${resetColor}`).join('')).join('\n')
}