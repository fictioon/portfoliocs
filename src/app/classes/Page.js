import each from 'lodash/each'
import { gsap, Power1 } from 'gsap'

import Scroll from '../utils/Scroll'
import Mouse from '../utils/Mouse'
import Touch from '../utils/Touch'
import Title from '../animations/Title'
import Paragraph from '../animations/Paragraph'
import Background from '../animations/Background'
import Line from '../animations/Line'
import Opacity from '../animations/Opacity'

export default class Page {
  constructor({ wrapper, cases, links }) {
    this.container = document.querySelector('.content')
    this.element = document.querySelector(wrapper)

    if (cases) {
      this.cases = document.querySelector(cases)
    }

    if (links) {
      this.links = document.querySelectorAll(links)
    }

    this.titleElements = document.querySelectorAll('.title')
    this.titleInnerElements = document.querySelectorAll('.title__inner')
    this.paragraphElements = document.querySelectorAll('.paragraph')
    this.paragraphInnerElements = document.querySelectorAll('.paragraph__inner')
    this.paragraphLargeElements = document.querySelectorAll('.opacity__inner')
    this.backgroundElement = document.querySelector('.section__description')
    this.lineElements = document.querySelectorAll('.section__line')

    this.createScroll()
    this.createMouse()
    this.createTouch()
  }

  createScroll() {
    this.scroll = new Scroll({
      element: this.element
    })
  }

  createMouse() {
    if (this.cases) {
      this.mouse = new Mouse({
        element: this.cases,
        links: this.links
      })
    }
  }

  createTouch() {
    this.touch = new Touch()
  }

  loaded({ delay }) {
    this.delay = delay

    this.show(this.delay)

    if (this.backgroundElement) {
      new Background(this.backgroundElement, 0, '-25%')
    }

    if (this.paragraphLargeElements) {
      each(this.paragraphLargeElements, (large) => {
        new Opacity(large, 0.2)
      })
    }

    each(this.lineElements, (line) => {
      new Line(line, 0)
    })

    each(this.titleElements, (title) => {
      new Title(title, this.delay)
    })

    each(this.titleInnerElements, (title) => {
      new Title(title, 0.2)
    })

    each(this.paragraphElements, (paragraph) => {
      new Paragraph(paragraph, this.delay)
    })

    each(this.paragraphInnerElements, (paragraph) => {
      new Paragraph(paragraph, 0.2)
    })
  }

  show(delay) {
    gsap.fromTo(
      [this.container, window.experience.canvas],
      {
        y: '30%',
        opacity: 0
      },
      {
        delay: delay,
        duration: 0.8,
        ease: Power1.easeOut,
        y: '0%',
        opacity: 1
      }
    )
  }

  hide() {
    gsap.fromTo(
      [this.container, window.experience.canvas],
      {
        y: '0%'
      },
      {
        duration: 1.3,
        ease: Power1.easeOut,
        y: '-20%'
      }
    )
  }

  wheel(event) {
    this.scroll.wheel(event)
  }

  mouseDown(event) {
    if (this.cases) {
      this.mouse.mouseDown(event)
    }
  }
  mouseMove(event) {
    if (this.cases) {
      this.mouse.mouseMove(event)
    }
  }
  mouseUp(event) {
    if (this.cases) {
      this.mouse.mouseUp(event)
    }
  }

  touchDown(event) {
    this.touch.touchDown(event)
    this.scroll.touchDown()
    if (this.cases) {
      this.mouse.touchDown()
    }
  }
  touchMove(event) {
    this.touch.touchMove(event)
    this.scroll.touchMove(this.touch.y.distance)
    if (this.cases) {
      this.mouse.touchMove(this.touch.x.distance)
    }
  }
  touchUp(event) {
    this.touch.touchUp(event)
    this.scroll.touchUp()
    if (this.cases) {
      this.mouse.touchUp()
    }
  }

  resize() {}

  update() {
    this.scroll.update()
    if (this.cases) {
      this.mouse.update()
    }
    if (window.experience) {
      window.experience.scroll = this.scroll.scroll
      if (this.cases) {
        window.experience.mouse = this.mouse.move
      }
    }
  }

  destroy() {}
}
