import test from 'ava'
import { Sprite } from './Sprite'

test('Sprite', (t) => {
  t.plan(3)
  // 1px image
  const url = 'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='
  const sprite = new Sprite({ url, x: 10, y: 12 })
  t.is(sprite.x, 10)
  t.is(sprite.y, 12)
  t.is(typeof sprite.image, 'object')
})
