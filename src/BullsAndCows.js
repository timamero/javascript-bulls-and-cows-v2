class BullsAndCows {
  constructor() {
    this.lastGuess
    this.guesses = []
    this.targetNumber
    this.maxNumberOfGuesses = 20
  }

  getGuesses() {
    return this.guesses
  }

  newGuess(guess) {
    this.guesses.push(guess)
    this.lastGuess = guess
  }

  generateTargetNumber() {
    this.targetNumber = Array.from(new Array(4)).map(() => Math.floor(Math.random() * 10)).join('')
  }

  getTargetNumber() {
    return this.targetNumber
  }

  isLastGuessEqualTarget() {
    return this.lastGuess === this.targetNumber
  }

  isGameEnded() {
    if (this.lastGuess === this.targetNumber || this.guesses.length >= 20) {
      return true
    }
    return false
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