import { gsap, Power1 } from 'gsap'

export default class LoadPage {
  constructor() {
    this.loadPageElement = document.querySelector('.loadpage')
    this.loadPagePhrase = document.querySelector('.loadpage__phrase')

    this.phrases = [
      'Me gusta comer.',
      'Me gusta hearthstone.',
      'Me gusta javascript.',
      'Me gusta el norteño.',
      'Odio los frameworks.',
      'Me gusta animar.',
      'Me gusta el cine.',
      'Odio los jefes.',
      'Me gusta el frontend.',
      'Me gusta diseñar.',
      'Me gustan los videojuegos.'
    ]

    this.createPhrase()
    this.loading()
  }

  createPhrase() {
    const random = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }

    this.loadPagePhrase.innerHTML =
      this.phrases[random(0, this.phrases.length - 1)]
  }

  loading() {
    return new Promise((resolve) => {
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
