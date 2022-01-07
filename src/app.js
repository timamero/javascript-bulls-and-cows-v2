import 'beercss'
import BullsAndCows from './BullsAndCows'

/*
 * Elements
*/
/* Menu */
const menu = document.getElementById('menu')
const menuBtn = document.getElementById('menu-btn')
const hideMenuBtn = document.getElementById('hide-menu-btn')
const instructionsBtn = document.getElementById('instructions-btn')
const aboutBtn = document.getElementById('about-btn')
/* Instruction and about modals */
const instructions = document.getElementById('instructions')
const closeInstructionsBtn = document.getElementById('close-instructions-btn')
const about = document.getElementById('about')
const closeAboutBtn = document.getElementById('close-about-btn')
/* Game */
const guessInput = document.getElementById('guess-input')
const submitBtn = document.getElementById('submit-btn')
const endGameModal = document.getElementById('end-game')
const endGameHeading = document.getElementById('end-game-heading')
const closeEndGameBtn = document.getElementById('close-end-game-btn')

/*
 * Create containing for holding previous guesses
*/
const previousGuessesContainer = document.getElementById('previous-guesses')

/*
 * Initialize Bulls and Cows game
*/
let bac = new BullsAndCows()
bac.generateTargetNumber()
console.log('target number', bac.getTargetNumber())

/*
 * User Events
*/
/* Menu */
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hide')

  // If instructions or about are visible and user clicks the home buttons, instructions or about will be made hidden
  if (instructions.classList.contains('active')) {
    instructions.classList.toggle('active')
  }
  if (about.classList.contains('active')) {
    about.classList.toggle('active')
  }
})

hideMenuBtn.addEventListener('click', () => {
  menu.classList.toggle('hide')
})

instructionsBtn.addEventListener('click', () => {
  instructions.classList.toggle('active')
  menu.classList.toggle('hide')
})

aboutBtn.addEventListener('click', () => {
  about.classList.toggle('active')
  menu.classList.toggle('hide')
})

/* Instruction and about modals */
closeInstructionsBtn.addEventListener('click', () => {
  instructions.classList.toggle('active')
})

closeAboutBtn.addEventListener('click', () => {
  about.classList.toggle('active')
})

/* Game */
submitBtn.addEventListener('click', () => {
  console.log('guess submitted', guessInput.value)

  if (BullsAndCows.validateGuess(guessInput.value)) {
    bac.newGuess(guessInput.value)
    const [bulls, cows] = bac.getBullsAndCowsOfLastGuess()

    previousGuessesContainer.innerHTML = `
      <tr>
        <td>${guessInput.value}</td>
        <td>${bulls}</td>
        <td>${cows}</td>
      </tr>
      ` + previousGuessesContainer.innerHTML
    guessInput.value = ''
    guessInput.focus()

    if (bac.isGameEnded()) {
      endGame(bac.getEndGameCase())
    }
  }

})

closeEndGameBtn.addEventListener('click', () => {
  console.log('close end game modal')
  endGameModal.classList.toggle('active')
})

function endGame(endCase) {
  console.log('game ended')
  endGameModal.classList.toggle('active')
  guessInput.disabled = true
  switch (endCase) {
    case 'matched':
      endGameHeading.textContent = 'You cracked the code!\n🤗'
      console.log('guess matched target')
      break
    case 'exceeded-guess-count':
      endGameHeading.textContent = 'You ran out of guesses.\n😔'
      console.log('ran out of guesses')
  }
}

