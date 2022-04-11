import { gsap, Power1 } from 'gsap'

import Animation from '../classes/Animation'

export default class Background extends Animation {
  constructor(element, delay, margin) {
    super(element, delay, margin)
    this.element = element
  }

  animateIn(delay) {
    gsap.to(this.element, {
      delay: delay,
      duration: 0.5,
      ease: Power1.easeInOut,
      backgroundColor: '#E4E4E4',
      color: '#1F1E1D'
    })
  }

  animateOut() {}
}
