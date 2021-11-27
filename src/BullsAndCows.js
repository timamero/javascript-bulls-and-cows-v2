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
}

export default BullsAndCows