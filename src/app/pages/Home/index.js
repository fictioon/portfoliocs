import Page from '../../classes/Page'

export default class Home extends Page {
  constructor() {
    super({
      wrapper: '.home__wrapper',
      cases: '.section__cases__all__wrapper',
      links: '.section__case__link'
    })

    this.elementsRotate = document.querySelectorAll('.object__rotate')
    this.elementsRotateInverse = document.querySelectorAll(
      '.object__rotate__inverse'
    )
  }

  setRotate() {
    this.elementsRotate.forEach((element) => {
      element.style.transform = `rotate(${this.scroll.scroll.current * 0.1}deg)`
    })
    this.elementsRotateInverse.forEach((element) => {
      element.style.transform = `rotate(${
        -this.scroll.scroll.current * 0.1
      }deg)`
    })
  }

  update() {
    super.update()

    this.setRotate()
  }
}
