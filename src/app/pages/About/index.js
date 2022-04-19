import Page from '../../classes/Page'

export default class About extends Page {
  constructor() {
    super({
      wrapper: '.about__wrapper'
    })

    this.elementsRotate = document.querySelectorAll('.object__rotate')
  }

  setRotate() {
    this.elementsRotate.forEach((element) => {
      element.style.transform = `rotate(${this.scroll.scroll.current * 0.1}deg)`
    })
  }

  update() {
    super.update()

    this.setRotate()
  }
}
