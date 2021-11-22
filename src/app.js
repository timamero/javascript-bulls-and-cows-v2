import 'beercss'

const menu = document.getElementById('menu')
const menuBtn = document.getElementById('menu-btn')
const hideMenuBtn = document.getElementById('hide-menu-btn')

menuBtn.addEventListener('click', () => {
  console.log('clicked')
  menu.classList.toggle('hide')
})

hideMenuBtn.addEventListener('click', () => {
  menu.classList.toggle('hide')
})