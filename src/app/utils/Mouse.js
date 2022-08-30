import { gsap } from 'gsap'
import Prefix from 'prefix'

export default class Mouse {
  constructor({ element, links }) {
    this.element = element
    this.transformPrefix = Prefix('transform')

    if (links) {
      this.links = links
    }

    this.x = {
      start: 0,
      distance: 0,
      end: 0
    }

    this.move = {
      current: 0,
      target: 0,
      last: 0,
      limit: 0
    }

    this.moveCurrent = 0
  }

  activateLinks() {
    this.links.forEach((link) => {
      link.style.pointerEvents = 'auto'
      link.style.cursor = 'pointer'
    })
  }
  desactivateLinks() {
    this.links.forEach((link) => {
      link.style.pointerEvents = 'none'
      link.style.cursor = 'default'
    })
  }

  mouseDown({ x }) {
    this.isDown = true
    this.x.start = x
    this.moveCurrent = this.move.current
  }

  mouseMove({ x }) {
    if (!this.isDown) return
    this.desactivateLinks()
    this.x.end = x
    this.x.distance = this.x.start - this.x.end
    this.move.target = this.moveCurrent + this.x.distance * 1.5
  }

  mouseUp() {
    this.isDown = false
    this.activateLinks()
    this.target = this.move.current
  }

  touchDown() {
    this.moveCurrent = this.move.current
  }

  touchMove(target) {
    this.move.target = this.moveCurrent + target * 1.5
  }

  touchUp() {
    this.target = this.move.current
  }

  update() {
    this.move.limit = this.element.clientWidth - window.innerWidth

    this.move.target = gsap.utils.clamp(0, this.move.limit, this.move.target)

    if (this.move.current < 0.01) {
      this.move.current = 0
    }

    this.move.current = gsap.utils.interpolate(
      this.move.current,
      this.move.target,
      0.1
    )

    if (this.element) {
      this.element.style[
        this.transformPrefix
      ] = `translateX(-${this.move.current}px)`
    }
  }
}
