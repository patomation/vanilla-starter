
import { initCanvas, resizeCanvas, addImage, onMouseMove, onMouseDown } from './lib/canvas'
import { Sprite } from './classes/Sprite'
import ufo from '../assets/sprites/ufo.png'
import { hotkey } from '@patomation/hotkey'
import { up, down, left, right } from './lib/input'

// import { init } from 'snabbdom/src/init'
// import { classModule } from 'snabbdom/src/modules/class'
// import { propsModule } from 'snabbdom/src/modules/props'
// import { styleModule } from 'snabbdom/src/modules/style'
// import { eventListenersModule } from 'snabbdom/src/modules/eventlisteners'
// import { h } from 'snabbdom/src/h' // helper function for creating vnodes

// if (module && module.hot) {
//   module.hot.accept()
// }

let ufoSprite: Sprite

window.addEventListener('DOMContentLoaded', () => {
  initCanvas()
  resizeCanvas(window.innerWidth, window.innerHeight)
  // drawSquare()

  // // const div = document.createElement('div')
  // const container = document.getElementById('container')
  // const patch = init([classModule, styleModule])
  // const someFn = () => {
  //   console.log('yeet')
  // }
  // const vnode = h('div#container.two.classes', { on: { click: someFn } }, [
  //   h('span', { style: { fontWeight: 'bold' } }, 'This is bold'),
  //   ' and this is just normal text',
  //   h('a', { props: { href: '/foo' } }, 'I\'ll take you places!')
  // ])
  // // Patch into empty DOM element – this modifies the DOM as a side effect
  // patch(container, vnode)

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
