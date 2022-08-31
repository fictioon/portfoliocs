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

    this.title1 = document.querySelector('.header__title__dev')
    this.title2 = document.querySelector('.header__title__mix')
    this.title3 = document.querySelector('.header__title__des')
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

  setMove() {
    this.title1.style.transform = `translateX(${
      -this.scroll.scroll.current * 0.5
    }px)`
    this.title2.style.transform = `translateX(${
      this.scroll.scroll.current * 0.4
    }px)`
    this.title3.style.transform = `translateX(${
      -this.scroll.scroll.current * 0.2
    }px)`
  }

  update() {
    super.update()

    this.setRotate()
    this.setMove()
  }
}
