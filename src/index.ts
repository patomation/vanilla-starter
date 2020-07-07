
import { initCanvas, resizeCanvas, addImage, onMouseMove, onMouseDown } from './lib/canvas'
import { Sprite } from './classes/Sprite'
import ufo from '../assets/sprites/ufo.png'
import { hotkey } from '@patomation/hotkey'
import { up, down, left, right } from './lib/input'
// if (module && module.hot) {
//   module.hot.accept()
// }

let ufoSprite: Sprite

window.addEventListener('DOMContentLoaded', () => {
  initCanvas()
  resizeCanvas(window.innerWidth, window.innerHeight)
  // drawSquare()
  ufoSprite = addImage(ufo, 200, 100)
  // follow mouse example
  // onMouseMove((x, y) => {
  //   console.log('mouse', x, y)
  //   console.log(ufoSprite.x, ufoSprite.y);
  //   ufoSprite.x = x
  //   ufoSprite.y = y
  // })

  const moveAmount = 25

  up(() => {
    ufoSprite.y -= moveAmount
  })
  down(() => {
    ufoSprite.y += moveAmount
  })
  left(() => {
    ufoSprite.x -= moveAmount
  })
  right(() => {
    ufoSprite.x += moveAmount
  })
})

window.onresize = () => {
  const width = window.innerWidth
  const height = window.innerHeight
  console.log('resize', width, height)
  resizeCanvas(width, height)
  // drawSquare()
}
// canvas()
