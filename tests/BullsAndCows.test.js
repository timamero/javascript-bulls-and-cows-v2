// import BullsAndCows  from '../src/BullsAndCows'
const BullsAndCows = require('../src/BullsAndCows')

test.only('guess validation method checks for four digit number', () => {
  expect(BullsAndCows.valdiateGuess('1234')).toBe(true)
})