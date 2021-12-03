const BullsAndCows = require('../src/BullsAndCows')

test.only('guess validation method checks for four digit number', () => {
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
    ['', false]
  ]

  guessArr.forEach(guess => {
    console.log(guess)
    expect(BullsAndCows.validateGuess(guess[0])).toBe(guess[1])
  })
})