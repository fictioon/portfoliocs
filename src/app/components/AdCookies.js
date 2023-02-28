import { gsap, Power1 } from 'gsap'

export default class AdCookies {
  constructor() {
    this.adCookiesElement = document.querySelector('.adcookies')
    this.adCookiesButton = document.querySelector('.adcookies__button')

    this.show()
  }

  show() {
    if (!localStorage.getItem('entry')) {
      const tl = gsap.timeline({
        onComplete: () => {
          this.click()
        }
      })

      tl.to(this.adCookiesElement, {
        opacity: 1,
        duration: 0.5,
        delay: 2,
        ease: Power1.easeOut
      })
    }
  }

  click() {
    this.adCookiesButton.onclick = () => {
      this.hide()
    }
  }

  hide() {
    const tl = gsap.timeline({
      onComplete: () => {
        this.adCookiesElement.remove()
        localStorage.setItem('entry', 1)
      }
    })

    tl.to(this.adCookiesElement, {
      opacity: 0,
      duration: 0.4,
      ease: Power1.easeOut
    })
  }
}
