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

  setTargetNumber(target) {
    // Used for testing only
    this.targetNumber = target
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

  getBullsAndCowsOfLastGuess() {
    let targetToCheck = this.targetNumber.split('')
    const bullsArray = this.lastGuess.split('').map((el, i) => {
      if (targetToCheck[i] === el) {
        targetToCheck.splice(i, 1, 'b')
        return el
      }
      return ''
    }).join('')

    const cowsArray = this.lastGuess.split('').map((el, i) => {
      if (targetToCheck.includes(el) && targetToCheck[i] !== 'b') {
        const index = targetToCheck.indexOf(el)
        targetToCheck.splice(index, 1, 'c')
        return el
      }
      return ''
    }).join('')

    return [bullsArray.length, cowsArray.length]
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