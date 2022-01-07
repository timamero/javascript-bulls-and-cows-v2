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

test.only('when guess matches target number and number of guesses is less than 20, game has ended', () => {
  const bac = new BullsAndCows()

  const targetNumber = bac.getTargetNumber()
  bac.newGuess(targetNumber)
  const isGameEnded = bac.isGameEnded()
  const endGameCase = bac.getEndGameCase()

  expect(isGameEnded).toBe(true)
  expect(endGameCase).toBe('matched')
})

test.only('when number of guesses is more than or equal to 20, game has ended', () => {
  const bac = new BullsAndCows()

  bac.generateTargetNumber()
  const guess = bac.getTargetNumber().split('').map(num => Number(num) < 9 ? Number(num) + 1 : 0).join('')
  Array.from(new Array(20)).forEach(() => bac.newGuess(guess))
  const isGameEnded = bac.isGameEnded()
  const endGameCase = bac.getEndGameCase()

  expect(isGameEnded).toBe(true)
  expect(endGameCase).toBe('exceeded-guess-count')
})

test('when guess does not have any numbers matching the target number, there are no bulls or cows', () => {
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

test('when guess has one correct number in the correct position, there is 1 bulls and 0 cows', () => {
  const guessAndTargetResults = [
    {
      target: '1234',
      guess: '1777',
    },
    {
      target: '5533',
      guess: '1939',
    },
    {
      target: '7221',
      guess: '3245',
    },
    {
      target: '1112',
      guess: '0013',
    },
  ]

  guessAndTargetResults.forEach(t => {
    const bac = new BullsAndCows()

    bac.setTargetNumber(t.target)
    bac.newGuess(t.guess)
    const [bulls, cows] = bac.getBullsAndCowsOfLastGuess()

    expect(bulls).toBe(1)
    expect(cows).toBe(0)
  })
})

test('when guess has two correct numbers in the correct position, there are 2 bulls and 0 cows', () => {
  const guessAndTargetResults = [
    {
      target: '1234',
      guess: '1277',
    },
    {
      target: '5533',
      guess: '1539',
    },
    {
      target: '7221',
      guess: '3241',
    },
    {
      target: '1112',
      guess: '0113',
    },
  ]

  guessAndTargetResults.forEach(t => {
    const bac = new BullsAndCows()

    bac.setTargetNumber(t.target)
    bac.newGuess(t.guess)
    const [bulls, cows] = bac.getBullsAndCowsOfLastGuess()

    expect(bulls).toBe(2)
    expect(cows).toBe(0)
  })
})

test('when guess has one correct number in the wrong position, there is 0 bulls and 1 cows', () => {
  const guessAndTargetResults = [
    {
      target: '1234',
      guess: '7177',
    },
    {
      target: '5533',
      guess: '1859',
    },
    {
      target: '7221',
      guess: '2689',
    },
    {
      target: '1112',
      guess: '0001',
    },
  ]

  guessAndTargetResults.forEach(t => {
    const bac = new BullsAndCows()

    bac.setTargetNumber(t.target)
    bac.newGuess(t.guess)
    const [bulls, cows] = bac.getBullsAndCowsOfLastGuess()

    expect(bulls).toBe(0)
    expect(cows).toBe(1)
  })
})

test('when guess has four correct numbers in the correct position, there is 4 bulls and 0 cows', () => {
  const guessAndTargetResults = [
    {
      target: '1234',
      guess: '1234',
    },
    {
      target: '5533',
      guess: '5533',
    },
    {
      target: '7221',
      guess: '7221',
    },
    {
      target: '0001',
      guess: '0001',
    },
  ]

  guessAndTargetResults.forEach(t => {
    const bac = new BullsAndCows()

    bac.setTargetNumber(t.target)
    bac.newGuess(t.guess)
    const [bulls, cows] = bac.getBullsAndCowsOfLastGuess()

    expect(bulls).toBe(4)
    expect(cows).toBe(0)
  })
})

test('when guess has four correct numbers in the wrong position, there is 0 bulls and 4 cows', () => {
  const guessAndTargetResults = [
    {
      target: '1234',
      guess: '3421',
    },
    {
      target: '5533',
      guess: '3355',
    },
    {
      target: '7221',
      guess: '2172',
    },
    {
      target: '6601',
      guess: '1066',
    },
  ]

  guessAndTargetResults.forEach(t => {
    const bac = new BullsAndCows()

    bac.setTargetNumber(t.target)
    bac.newGuess(t.guess)

    const [bulls, cows] = bac.getBullsAndCowsOfLastGuess()

    expect(bulls).toBe(0)
    expect(cows).toBe(4)
  })
})

test('when guess has four correct numbers with two in the correct position and two in the wrong position, there is 2 bulls and 2 cows', () => {
  const guessAndTargetResults = [
    {
      target: '1234',
      guess: '1324',
    },
    {
      target: '5533',
      guess: '3535',
    },
    {
      target: '7221',
      guess: '2721',
    },
    {
      target: '6601',
      guess: '6610',
    },
  ]

  guessAndTargetResults.forEach(t => {
    const bac = new BullsAndCows()

    bac.setTargetNumber(t.target)
    bac.newGuess(t.guess)

    const [bulls, cows] = bac.getBullsAndCowsOfLastGuess()

    expect(bulls).toBe(2)
    expect(cows).toBe(2)
  })
})