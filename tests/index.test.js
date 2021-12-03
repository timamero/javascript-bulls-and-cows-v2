const jsdom = require('jsdom')

const { JSDOM } = jsdom

const options = {
  resources: 'usable'
}

test.skip('main title exists', async function() {
  await JSDOM.fromURL('http://localhost:1234', options).then(dom => {
    const mainTitle = dom.window.document.getElementById('main-title')
    expect(mainTitle).toBeTruthy()
    expect(mainTitle.innerHTML).toBe('Bulls and Cows')
  })
})

describe.skip('menu tests', function() {
  test('menu exists', async function() {
    await JSDOM.fromURL('http://localhost:1234', options).then(dom => {
      const menu = dom.window.document.getElementById('menu')
      expect(menu).toBeTruthy()
    })
  })

  test('menu is initially hidden', async function() {
    await JSDOM.fromURL('http://localhost:1234', options).then(dom => {
      const menu = dom.window.document.getElementById('menu')
      const classList = menu.classList.values()
      expect(classList).toContain('hide')
    })
  })
})

// References
// https://github.com/milahu/jsdom/tree/fix-computed-style-live-object