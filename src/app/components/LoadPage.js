import {gsap, Power1} from 'gsap'

export default class LoadPage {
  constructor() {
    this.loadPageElement = document.querySelector('.loadpage')

    this.loading()
  }

  loading() {
    return new Promise(resolve => {
      const tl = gsap.timeline()

      tl.to(this.loadPageElement, {
        y: '0%',
        duration: 1,
        ease: Power1.easeOut,
        onComplete: resolve
      })
      tl.to(this.loadPageElement, {
        y: '-100%',
        duration: 1,
        ease: Power1.easeOut,
        delay: 1
      })
      tl.to(this.loadPageElement, {
        y: '100%',
        duration: 0
      })
    })
  }
} 