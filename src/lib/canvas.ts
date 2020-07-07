import { Sprite } from '../classes/Sprite'

let canvas: HTMLCanvasElement
let ctx: CanvasRenderingContext2D

const color = 'green'

export function initCanvas (): void {
  canvas = document.getElementById('canvas') as HTMLCanvasElement
  ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  // Start drawing canvas every frame
  drawCanvas()
}

/**
 * Get canvas object
 */
export function getCanvas (): HTMLCanvasElement {
  return canvas
}
/**
 * Get Canvas 2d Context
 */
export function getCtx (): CanvasRenderingContext2D {
  return ctx
}

export function onMouseMove (callback: (clientX: number, clientY: number) => void) {
  canvas.addEventListener('mousemove', ({ clientX, clientY }) => {
    callback(clientX, clientY)
  })
}

export function onMouseDown (callback: (clientX: number, clientY: number) => void) {
  canvas.addEventListener('mousedown', ({ clientX, clientY }) => {
    callback(clientX, clientY)
  })
}

export function onMouseUp (callback: (clientX: number, clientY: number) => void) {
  canvas.addEventListener('mouseup', ({ clientX, clientY }) => {
    callback(clientX, clientY)
  })
}

export function resizeCanvas (width: number, height: number) {
  canvas.width = width
  canvas.height = height
  // TODO re-render
}

export function clearCanvas () {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

export function drawSquare (x = 10, y = 10) {
  if (ctx) {
    ctx.fillStyle = color
    const width = 40
    const height = 40
    ctx.fillRect(x - (width / 2), y - (height / 2), width, height)
  }
}

export function drawImage (url: string, x: number, y: number) {
  const image = new Image()
  image.src = url
  image.onload = () => {
    if (ctx) {
      ctx.drawImage(image, 0, 0)
    }
  }
}

const shapes = []
const images: Sprite[] = []

const isPaused = false

export function drawCanvas (): void {
  clearCanvas()
  // draw images
  console.log('images.length', images.length)
  images.forEach(({ image, x, y }) => {
    if (ctx) {
      ctx.drawImage(image, x, y)
    }
  })
  // Draw shapes
  // console.log('fps tick')
  // Call itself
  if (!isPaused) {
    window.requestAnimationFrame(drawCanvas)
  }
}

/**
 *
 * @param url url to image location
 * @param x number px
 * @param y number px
 */
export function addImage (url:string, x: number, y: number): Sprite {
  console.log('add image')

  const sprite = new Sprite({ url, x, y })
  // Track images
  images.push(sprite)
  return sprite
}

// TODO add sprite
// TODO add image
