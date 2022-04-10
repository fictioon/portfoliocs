import {gsap, Power1} from 'gsap'
import { split } from '../utils/text'

import Animation from '../classes/Animation'

export default class Paragraph extends Animation {
	constructor(element, delay) {
    super(element, delay)

    split({
			element: this.element,
			expression: ' '
    })
    split({
			element: this.element,
			expression: ' '
    })
    
    this.paragraphSpans = this.element.querySelectorAll('span span')
  }

  animateIn(delay) {
    this.element.style.opacity = "1";
    
    this.paragraphIn = gsap.timeline({
      delay: delay
    })

    this.paragraphIn.to(this.paragraphSpans,
      {
        duration: .4,
        ease: Power1.easeInOut,
        stagger: 0.05,
        y: '0%',
        opacity: 1,
      }
    )
	}

	animateOut() {

	}
}
