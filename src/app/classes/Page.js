import each from 'lodash/each'
import {gsap, Power1} from 'gsap'

import Scroll from '../utils/Scroll'
import Title from '../animations/Title'
import Paragraph from '../animations/Paragraph'
import Background from '../animations/Background'
import Line from '../animations/Line'
import Opacity from '../animations/Opacity'

export default class Page {
  constructor({ wrapper }) {
    this.container = document.querySelector('.content')
    this.element = document.querySelector(wrapper)

    this.titleElements = document.querySelectorAll('.title')
    this.titleInnerElements = document.querySelectorAll('.title__inner')
    this.paragraphElements = document.querySelectorAll('.paragraph')
    this.paragraphInnerElements = document.querySelectorAll('.paragraph__inner')
    this.paragraphLargeElements = document.querySelectorAll('.opacity__inner')
    this.backgroundElement = document.querySelector('.section__description')
    this.lineElements = document.querySelectorAll('.section__line')

    this.createScroll();

		this.y = {
			start: 0,
			distance: 0,
			end: 0
		}
  }

  createScroll() {
    this.scroll = new Scroll({
      element: this.element
    })
  }

  loaded({ delay }) {
    this.show(delay)

    if (this.backgroundElement) {
      new Background(this.backgroundElement, 0, "-25%")
    }

    if (this.paragraphLargeElements) {
      each(this.paragraphLargeElements, large => {
        new Opacity(large, .3)
      })
    }

    each(this.lineElements, line => {
      new Line(line, 0)
    })

    each(this.titleElements, title => {
      new Title(title, delay)
    })

    each(this.titleInnerElements, title => {
      new Title(title, .3)
    })

    each(this.paragraphElements, paragraph => {
      new Paragraph(paragraph, delay)
    })

    each(this.paragraphInnerElements, paragraph => {
      new Paragraph(paragraph, .3)
    })
  }

  show(delay) {
    gsap.fromTo([this.container, window.experience.canvas],
    {
      y: '30%',
      opacity: 0
    },
    {
      delay: delay,
      duration: .8,
      ease: Power1.easeOut,
      y: '0%',
      opacity: 1
    })
  }

  hide() {
    gsap.fromTo([this.container, window.experience.canvas],
    {
      y: '0%',
    },
    {
      duration: 1.3,
      ease: Power1.easeOut,
      y: '-20%',
    })
  }

  wheel(event) {
    this.scroll.wheel(event)
  }

  touchDown(event) {
    this.isDown = true
    
    this.y.start = event.touches
      ? event.touches[0].clientY
      : event.clientY
	}
	touchMove(event) {
		if (!this.isDown) return

    const y = event.touches
      ? event.touches[0].clientY
      : event.clientY
    
    this.y.end = y

    const yDistance = this.y.start - this.y.end
    this.scroll.touchMove(yDistance*0.1)

	}
	touchUp(event) {
		this.isDown = false

		const y = event.changedTouches
			? event.changedTouches[0].clientY
			: event.clientY

		this.y.end = y
	}

  resize() {
    
  }

  update() {
    this.scroll.update()
    if (window.experience) {
      window.experience.scroll = this.scroll.scroll
    }
  }

  destroy(){}
}