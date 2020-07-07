import { hotkey } from '@patomation/hotkey'

export function up (callback: () => void): void {
  console.log('up')

  hotkey('arrowup').down(callback)
  hotkey('w').down(callback)
}

export function down (callback: () => void): void {
  hotkey('arrowdown').down(callback)
  hotkey('s').down(callback)
}

export function left (callback: () => void): void{
  hotkey('arrowleft').down(callback)
  hotkey('a').down(callback)
}

export function right (callback: () => void): void {
  hotkey('arrowright').down(callback)
  hotkey('d').down(callback)
}

export function initInput (): void {
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
    console.log('tilde')
    // crouch
  })
}
