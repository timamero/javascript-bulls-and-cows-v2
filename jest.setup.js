// const fs = require('fs')
// const path = require('path')
// const jsdom = require('jsdom')

// const html = fs.readFileSync(path.resolve(__dirname, './src/index.html'))
// const { JSDOM } = jsdom
// // const dom = new JSDOM(html, { resources: 'usable', url: 'http://localhost/' })

// const dom = new JSDOM(html)

// const dom = new JSDOM('<!DOCTYPE html><head/><body></body>', {
  // url: 'http://127.0.0.1/',
  // referrer: 'https://example.com/',
  // contentType: 'text/html',
  // userAgent: 'Mellblomenator/9000',
  // includeNodeLocations: true,
  // storageQuota: 10000000,
// })
// global.window = dom.window
// global.document = window.document
// global.navigator = window.navigator
console.log('in setup file')
// console.log('pathname', window.location.href)
jest.setTimeout(10000)



