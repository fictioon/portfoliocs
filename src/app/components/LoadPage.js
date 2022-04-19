import { gsap, Power1 } from 'gsap'

export default class LoadPage {
  constructor() {
    this.loadPageElement = document.querySelector('.loadpage')
    this.loadPagePhrase = document.querySelector('.loadpage__phrase')

    this.phrases = [
      'Diseñando desde 2011.',
      'Diseño y desarrollo.',
      'Vivo en Quito, Ecuador.',
      'Me gusta vanilla javascript.',
      'Experiencias con ThreeJS.',
      'Desarrollo de landing pages.',
      'Disfruto del buen cine.',
      'Freelancer disponible.',
      'Me gusta el frontend.',
      'Desarrollo creativo.',
      'Landings para agencias digitales.'
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
