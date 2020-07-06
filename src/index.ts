
import { initCanvas, resizeCanvas, addImage, onMouseMove, onMouseDown } from './lib/canvas'
import { Sprite } from './classes/Sprite'
import ufo from '../assets/sprites/ufo.png'
import hotkey from '@patomation/hotkey'

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

  onMouseDown((x, y) => {
    ufoSprite.x = x - (64 / 2)
    ufoSprite.y = y - (64 / 2)
  })

  const amountToMove = 32

  function up () {
    ufoSprite.y -= amountToMove
  }

  function down () {
    ufoSprite.y += amountToMove
  }

  function left () {
    ufoSprite.x -= amountToMove
  }

  function right () {
    ufoSprite.x += amountToMove
  }

  hotkey('arrowup').down(up)
  hotkey('arrowdown').down(down)
  hotkey('arrowleft').down(left)
  hotkey('arrowright').down(right)

  hotkey('w').down(up)
  hotkey('s').down(down)
  hotkey('a').down(left)
  hotkey('d').down(right)

  hotkey('1').down(() => {
    console.log('item 1')
  })
  hotkey('2').down(() => {
    console.log('item 2')
  })
  hotkey('3').down(() => {
    console.log('item 3')
  })
  hotkey('4').down(() => {
    console.log('item 4')
  })
  hotkey('q').down(() => {
    console.log('special ability')
  })
  hotkey('e').down(() => {
    console.log('interact with object')
  })
  hotkey('r').down(() => {
    console.log('reload')
  })
  hotkey('f').down(() => {
    console.log('drop')
  })
  hotkey('z').down(() => {
    console.log('kick 1')
  })
  hotkey('x').down(() => {
    console.log('kick 2')
  })
  hotkey('c').down(() => {
    console.log('kick 3')
  })

  hotkey('space').down(() => {
    console.log('space')
  })

  // Todo make this work
  hotkey('control').down(() => {
    console.log('ctrl')
    // crouch
  })
  hotkey('alt').down(() => {
    console.log('alt')
    // crouch
  })
  hotkey('alt').down(() => {
    console.log('shift')
    // crouch
  })
  hotkey('tab').down(() => {
    console.log('tab')
    // crouch
  })
  hotkey('`').down(() => {
    console.log('tilda')
    // crouch
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
