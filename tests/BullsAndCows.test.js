const BullsAndCows = require('../src/BullsAndCows')

function generateNonMatchingGuess(target) {
  let guess = []
  while (guess.length < 4) {
    const num = Math.floor(Math.random() * 10).toString()
    if (!target.includes(num)) {
      guess.push(num)
    }
  }

  return guess.join('')
}

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

test('when guess does not matches target number and number of guesses is less than 20, game is active', () => {
  const bac = new BullsAndCows()

  bac.generateTargetNumber()
  const guess = bac.getTargetNumber().split('').map(num => Number(num) < 9 ? Number(num) + 1 : 0).join('')
  bac.newGuess(guess)
  const isGameEnded = bac.isGameEnded()

  expect(isGameEnded).toBe(false)
})

test('when guess matches target number and number of guesses is less than 20, game has ended', () => {
  const bac = new BullsAndCows()

  const targetNumber = bac.getTargetNumber()
  bac.newGuess(targetNumber)
  const isGameEnded = bac.isGameEnded()

  expect(isGameEnded).toBe(true)
})

test('when number of guesses is more than or equal to 20, game has ended', () => {
  const bac = new BullsAndCows()

  bac.generateTargetNumber()
  const guess = bac.getTargetNumber().split('').map(num => Number(num) < 9 ? Number(num) + 1 : 0).join('')
  Array.from(new Array(20)).forEach(() => bac.newGuess(guess))
  const isGameEnded = bac.isGameEnded()

  expect(isGameEnded).toBe(true)
})

const targets = [
  '1234',
  '4444',
  '3779',
  '3773',
  '3123',
  '8812',
  '1288',
  '5551',
  '1555',
  '0456',
  '0034',
  '0008',
  '0000'
]

test('when guess does not have any numbers matching the target number, there are no bulls or cows', () => {
  // let results = []
  targets.forEach(t => {
    const bac = new BullsAndCows()
    bac.setTargetNumber(t)
    const guess = generateNonMatchingGuess(bac.getTargetNumber())
    bac.newGuess(guess)
    const [bulls, cows] = bac.getBullsAndCowsOfLastGuess()

    expect(bulls).toBe(0)
    expect(cows).toBe(0)
  })
})

test.only('when guess has one correct number in the correct position, there is 1 bulls and 0 cows', () => {
  targets.forEach(t => {
    const bac = new BullsAndCows()

    bac.setTargetNumber(t)
    console.log('target', bac.getTargetNumber())
    const guess = generateNonMatchingGuess(bac.getTargetNumber())
    const guessArr = guess.split('')
    guessArr.splice(1, 1, bac.getTargetNumber()[1])
    console.log('guess', guessArr.join(''))
    bac.newGuess(guessArr.join(''))
    const [bulls, cows] = bac.getBullsAndCowsOfLastGuess()

    expect(bulls).toBe(1)
    expect(cows).toBe(0)
  })
})

test('when guess has one correct number in the wrong position, there is 0 bulls and 1 cows', () => {
  const bac = new BullsAndCows()

  bac.generateTargetNumber()
  const guess = generateNonMatchingGuess(bac.getTargetNumber())
  const guessArr = guess.split('')
  guessArr.splice(1, 1, bac.getTargetNumber()[2])
  bac.newGuess(guessArr.join(''))
  const [bulls, cows] = bac.getBullsAndCowsOfLastGuess()

  expect(bulls).toBe(0)
  expect(cows).toBe(1)
})

test('when guess has four correct numbers in the correct position, there is 4 bulls and 0 cows', () => {
  const bac = new BullsAndCows()

  bac.generateTargetNumber()
  const targetNumber = bac.getTargetNumber()
  bac.newGuess(targetNumber)
  const [bulls, cows] = bac.getBullsAndCowsOfLastGuess()

  expect(bulls).toBe(4)
  expect(cows).toBe(0)
})
// last one left
test('when guess has four correct numbers in the wrong position, there is 0 bulls and 4 cows', () => {
  const bac = new BullsAndCows()

  let numberOfUniqueNumbers = 0
  let uniqueArray
  let targetNumber
  bac.generateTargetNumber()
  // Easier to pass test if target number has 4 unique values. If target number has les than 4 unique numbers, regenerate target number
  while (numberOfUniqueNumbers < 4) {
    numberOfUniqueNumbers = 0
    uniqueArray = []
    const target = bac.getTargetNumber().split('')
    target.forEach(el => {
      if (!uniqueArray.includes(el)) {
        uniqueArray.push(el)
      }
    })
    targetNumber = target.join('')
    numberOfUniqueNumbers = uniqueArray.length
  }

  const lastNumber = targetNumber.slice(-1)
  const guess = lastNumber.concat(targetNumber).slice(0, 4)
  bac.newGuess(guess)
  const [bulls, cows] = bac.getBullsAndCowsOfLastGuess()

  expect(bulls).toBe(0)
  expect(cows).toBe(4)
})