import test from 'ava'
import { up, down, left, right } from './input'

function pressKey (key: string) {
  const keyDownEvent = new KeyboardEvent('keydown', { key })
  document.dispatchEvent(keyDownEvent)
  const keyUpEvent = new KeyboardEvent('keyup', { key })
  document.dispatchEvent(keyUpEvent)
}

test('up', (t) => {
  let called = 0
  const callback = () => {
    called++
  }
  up(callback)
  pressKey('w')
  pressKey('arrowup')
  t.is(called, 2)
})

test('down', (t) => {
  let called = 0
  const callback = () => {
    called++
  }
  down(callback)
  pressKey('s')
  pressKey('arrowdown')
  t.is(called, 2)
})

test('left', (t) => {
  let called = 0
  const callback = () => {
    called++
  }
  left(callback)
  pressKey('a')
  pressKey('arrowleft')
  t.is(called, 2)
})

test('right', (t) => {
  let called = 0
  const callback = () => {
    called++
  }
  right(callback)
  pressKey('d')
  pressKey('arrowright')
  t.is(called, 2)
})
