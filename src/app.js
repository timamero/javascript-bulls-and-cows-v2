import 'beercss'

/* Menu Elements */
const menu = document.getElementById('menu')
const menuBtn = document.getElementById('menu-btn')
const hideMenuBtn = document.getElementById('hide-menu-btn')
const instructionsBtn = document.getElementById('instructions-btn')
/* Menu View Elements */
const instructions = document.getElementById('instructions')


/* User Events - Menu */
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hide')

  // If instructions are visible and user clicks the home buttons, instructions will be made hidden
  if (!instructions.classList.contains('hide')) {
    instructions.classList.toggle('hide')
  }
})

hideMenuBtn.addEventListener('click', () => {
  menu.classList.toggle('hide')
})

instructionsBtn.addEventListener('click', () => {
  console.log('clicked')
  instructions.classList.toggle('hide')
  menu.classList.toggle('hide')
})