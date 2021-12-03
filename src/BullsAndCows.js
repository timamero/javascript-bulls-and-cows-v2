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

  validateGuess(guess) {
    const regex = /\d{4}/ig
    return regex.test(guess)
  }
}

module.exports = BullsAndCows