const fs = require('fs')
const path = require('path')
const jsdom = require('jsdom')

const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'))
const { JSDOM } = jsdom
const dom = new JSDOM(html)

test('main title exists', function() {
  const mainTitle = dom.window.document.getElementById('main-title')
  expect(mainTitle).toBeTruthy()
  expect(mainTitle.innerHTML).toBe('Bulls and Cows')
})