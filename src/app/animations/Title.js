import { gsap, Power1 } from 'gsap'
import { split } from '../utils/text'

import Animation from '../classes/Animation'

export default class Title extends Animation {
  constructor(element, delay) {
    super(element, delay)

    split({
      element: this.element,
      expression: ''
    })
    split({
      element: this.element,
      expression: '<br/>'
    })

    this.titleSpans = this.element.querySelectorAll('span span')
  }

  animateIn(delay) {
    this.element.style.opacity = '1'

    this.titleIn = gsap.timeline({
      delay: delay
    })

    this.titleIn.to(this.titleSpans, {
      duration: 0.8,
      ease: Power1.easeInOut,
      stagger: 0.05,
      y: '0%',
      opacity: 1
    })
  }

  animateOut() {}
}
