import { gsap, Power1 } from 'gsap'

import Animation from '../classes/Animation'

export default class Line extends Animation {
  constructor(element, delay) {
    super(element, delay)
  }

  animateIn(delay) {
    gsap.to(this.element, {
      delay: delay,
      duration: 0.5,
      ease: Power1.easeInOut,
      scaleX: '100%'
    })
  }

  animateOut() {}
}
