export default class Touch {
  constructor() {
    this.y = {
      start: 0,
      distance: 0,
      end: 0
    }

    this.x = {
      start: 0,
      distance: 0,
      end: 0
    }
  }

  touchDown(event) {
    this.isDown = true
    this.y.start = event.touches ? event.touches[0].clientY : event.clientY
    this.x.start = event.touches ? event.touches[0].clientX : event.clientX
  }

  touchMove(event) {
    if (!this.isDown) return

    const y = event.touches ? event.touches[0].clientY : event.clientY
    const x = event.touches ? event.touches[0].clientX : event.clientX

    this.y.end = y
    this.x.end = x

    this.y.distance = this.y.start - this.y.end
    this.x.distance = this.x.start - this.x.end
  }

  touchUp(event) {
    this.isDown = false
  }
}
