class BullsAndCows {
  constructor() {
    this.lastGuess
    this.guesses = []
  }

  getGuesses() {
    return this.guesses
  }

  newGuess(guess) {
    this.guesses.push(guess)
  }

  static validateGuess(guess) {
    return guess.split('').length === 4
      ? guess.split('')
        .map(el => /\d/.test(Number(el, 10)))
        .every(el => el === true)
      : false
  }
}

module.exports = BullsAndCows