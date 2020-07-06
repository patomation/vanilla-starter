// Set up virtual dom for testing
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const { createCanvas } = require('canvas')
const dom = new JSDOM('<!DOCTYPE html><canvas id="canvas"></canvas>', {
  beforeParse (window) {
    window.requestAnimationFrame = function () {
      // do something
    }
  }
})

// Support canvas
dom.window.document.createElement = () => {
  return createCanvas(200, 200) // Create a node canvas instance
}

global.window = dom.window
global.document = dom.window.document
global.Image = dom.window.Image
