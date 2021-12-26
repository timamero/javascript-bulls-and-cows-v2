const BullsAndCows = require('../src/BullsAndCows')

test('guess validation method checks for four digit number', () => {
  const guessArr = [
    ['1234', true],
    ['0000', true],
    ['0404', true],
    ['0005', true],
    ['000000', false],
    ['abcd', false],
    ['a1b2', false],
    ['12345', false],
    ['1', false],
    ['23', false],
    ['345', false],
    ['', false],
    ['$&%^', false],
    ['*()(($%', false]
  ]

  guessArr.forEach(guess => {
    expect(BullsAndCows.validateGuess(guess[0])).toBe(guess[1])
  })
})

test('when 2 valid guesses are made, the getGuesses method returns an array with a length of 2', () => {
  const bac = new BullsAndCows()

  bac.newGuess('1234')
  bac.newGuess('5678')

  const guesses = bac.getGuesses()

  expect(guesses.length).toBe(2)
})

test('a random 4 digit number is generated', () => {
  const bac = new BullsAndCows()

  bac.generateTargetNumber()

  const targetNumber = bac.getTargetNumber()

  expect(targetNumber).toMatch(/^\d{4}$/)
})

test('when guess matches target number, isLastGuessEqualTarget returns true', () => {
  const bac = new BullsAndCows()

  bac.generateTargetNumber()

  const targetNumber = bac.getTargetNumber()
  bac.newGuess(targetNumber)
  const isLastGuessEqualTarget = bac.isLastGuessEqualTarget()

  expect(isLastGuessEqualTarget).toBe(true)
})

test('when guess does not matches target number, isLastGuessEqualTarget returns false', () => {
  const bac = new BullsAndCows()

  bac.generateTargetNumber()
  const guess = bac.getTargetNumber().split('').map(num => Number(num) < 9 ? Number(num) + 1 : 0).join('')
  bac.newGuess(guess)
  const isLastGuessEqualTarget = bac.isLastGuessEqualTarget()

  expect(isLastGuessEqualTarget).toBe(false)
})

test.only('when guess does not matches target number and number of guesses is less than 20, game is active', () => {
  const bac = new BullsAndCows()

  bac.generateTargetNumber()
  const guess = bac.getTargetNumber().split('').map(num => Number(num) < 9 ? Number(num) + 1 : 0).join('')
  bac.newGuess(guess)
  const isGameEnded = bac.isGameEnded()

  expect(isGameEnded).toBe(false)
})

test.only('when guess matches target number and number of guesses is less than 20, game has ended', () => {
  const bac = new BullsAndCows()

  const targetNumber = bac.getTargetNumber()
  bac.newGuess(targetNumber)
  const isGameEnded = bac.isGameEnded()

  expect(isGameEnded).toBe(true)
})

test.only('when number of guesses is more than or equal to 20, game has ended', () => {
  const bac = new BullsAndCows()

  bac.generateTargetNumber()
  const guess = bac.getTargetNumber().split('').map(num => Number(num) < 9 ? Number(num) + 1 : 0).join('')
  Array.from(new Array(20)).forEach(() => bac.newGuess(guess))
  const isGameEnded = bac.isGameEnded()

  expect(isGameEnded).toBe(true)
})