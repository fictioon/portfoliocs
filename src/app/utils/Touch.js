export default class Touch {
  constructor() {
    this.yDistance = 0

    this.y = {
      start: 0,
      distance: 0,
      end: 0
    }
  }

  touchDown(event) {
    this.isDown = true
    this.y.start = event.touches ? event.touches[0].clientY : event.clientY
  }

  touchMove(event) {
    if (!this.isDown) return

    const y = event.touches ? event.touches[0].clientY : event.clientY

    this.y.end = y

    this.yDistance = this.y.start - this.y.end
  }

  touchUp(event) {
    this.isDown = false

    // const y = event.changedTouches
    //   ? event.changedTouches[0].clientY
    //   : event.clientY

    // this.yDistance = this.y.end
  }
}
