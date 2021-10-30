// const fs = require('fs')
// const path = require('path')
const jsdom = require('jsdom')


// const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'))

const { JSDOM } = jsdom

// const resourceLoader = new jsdom.ResourceLoader({
//   // url: 'http://localhost:1234',
//   proxy: 'http://localhost:1234',
//   strictSSL: false,
//   userAgent: 'Mellblomenator/9000',
//   resources: 'usable',
// })
// const dom = new JSDOM(html, { resources: resourceLoader })

// const dom = new JSDOM(html, { resources: 'usable', url: 'http://localhost:1234' })
const options = {
  resources: 'usable'
}

// var resourceLoader = new jsdom.ResourceLoader({
//   proxy: 'http://localhost:1234',
//   strictSSL: false,
// })

// var options = {
//   resources: resourceLoader,
// }


// const dom = new JSDOM(html)

beforeEach(function() {
  jest.setTimeout(10000)
})

test('main title exists', async function() {
  await JSDOM.fromURL('http://localhost:1234', options).then(dom => {
    // console.log(dom.serialize())
    const mainTitle = dom.window.document.getElementById('main-title')
    expect(mainTitle).toBeTruthy()
    expect(mainTitle.innerHTML).toBe('Bulls and Cows')
  })
})

describe('menu tests', function() {
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

  test('when menu button is clicked, menu is displayed', async function() {
    await JSDOM.fromURL('http://localhost:1234', options).then(dom => {
      console.log(dom)
    })
  })
})


// References
// https://github.com/milahu/jsdom/tree/fix-computed-style-live-object
