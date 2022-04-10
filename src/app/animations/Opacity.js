import {gsap, Power1} from 'gsap'

import Animation from '../classes/Animation'

export default class Opacity extends Animation {
	constructor(element, delay) {
    super(element, delay)
    
    this.element = element
  }

  animateIn(delay) {
    gsap.to(this.element,
      {
        delay: delay,
        duration: .8,
        ease: Power1.easeInOut,
        opacity: 1,
      }
    )
	}

	animateOut() {

	}
}
