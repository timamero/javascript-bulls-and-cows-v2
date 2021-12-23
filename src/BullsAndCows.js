class BullsAndCows {
  constructor() {
    this.lastGuess
    this.guesses = []
    this.targetNumber
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

  static validateGuess(guess) {
    return guess.split('').length === 4
      ? guess.split('')
        .map(el => /\d/.test(Number(el, 10)))
        .every(el => el === true)
      : false
  }
}

module.exports = BullsAndCows