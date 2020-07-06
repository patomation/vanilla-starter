export interface SpriteOptions {
  url: string
  x: number
  y: number
}

export class Sprite {
  constructor ({
    url,
    x,
    y
  }: SpriteOptions) {
    this.url = url
    this.x = x
    this.y = y

    this.image = new Image()
    this.image.src = url
  }

  image: HTMLImageElement
  url: string
  x: number
  y: number
}
