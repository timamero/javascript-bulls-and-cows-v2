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

test.only('when 2 valid guesses are made, the getGuesses method returns an array with a length of 2', () => {
  const bac = new BullsAndCows()

  bac.newGuess('1234')
  bac.newGuess('5678')

  const guesses = bac.getGuesses()

  expect(guesses.length).toBe(2)
})