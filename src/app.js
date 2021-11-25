import 'beercss'
/*
 * Elements
*/
/* Menu */
const menu = document.getElementById('menu')
const menuBtn = document.getElementById('menu-btn')
const hideMenuBtn = document.getElementById('hide-menu-btn')
const instructionsBtn = document.getElementById('instructions-btn')
const aboutBtn = document.getElementById('about-btn')
/* Menu Views */
const instructions = document.getElementById('instructions')
const closeInstructionsBtn = document.getElementById('close-instructions-btn')
const about = document.getElementById('about')
const closeAboutBtn = document.getElementById('close-about-btn')

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

closeInstructionsBtn.addEventListener('click', () => {
  instructions.classList.toggle('active')
})

aboutBtn.addEventListener('click', () => {
  about.classList.toggle('active')
  menu.classList.toggle('hide')
})

closeAboutBtn.addEventListener('click', () => {
  about.classList.toggle('active')
})