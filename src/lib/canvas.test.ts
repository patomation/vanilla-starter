import test from 'ava'
import { initCanvas } from './canvas'
test('initCanvas()', (t) => {
  const canvas = document.createElement('canvas')
  initCanvas(canvas)
  t.pass()
})
