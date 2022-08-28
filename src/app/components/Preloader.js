import EventEmitter from 'events'
import * as THREE from 'three'
import { gsap, Power1 } from 'gsap'
import { split } from '../utils/text'

import textureImg1 from '../../assets/images/home/cristian-saenz-portrait.jpg'
import textureImg2 from '../../assets/images/about/cristian-saenz-portrait-lost.jpg'
import textureImg3 from '../../assets/images/about/cristian-saenz-portrait-hor.jpg'

export default class Preloader extends EventEmitter {
  constructor() {
    super()
    this.preloaderElement = document.querySelector('.preloader')
    this.preloaderTextElement = document.querySelector(
      '.preloader__count__text'
    )
    this.loadingBarElement = document.querySelector('.preloader__line')
    this.preloaderInfoElement = document.querySelector('.preloader__info__text')

    this.createLoadingManager()
  }

  createLoadingManager() {
    this.loadingManager = new THREE.LoadingManager()

    const texture1 = new THREE.TextureLoader(this.loadingManager).load(
      textureImg1
    )
    const texture2 = new THREE.TextureLoader(this.loadingManager).load(
      textureImg2
    )
    const texture3 = new THREE.TextureLoader(this.loadingManager).load(
      textureImg3
    )

    window.textures = [texture1, texture2, texture3]

    this.loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
      const progressRatio = itemsLoaded / itemsTotal
      this.loadingBarElement.style.transform = `scaleX(${progressRatio})`
      this.preloaderTextElement.innerHTML = Math.round(progressRatio * 100)
      this.preloaderInfoElement.innerHTML = `${Math.round(
        progressRatio * 8
      )} años de experiencia`
    }

    this.loadingManager.onLoad = () => {
      this.loaded()
    }
  }

  loaded() {
    return new Promise((resolve) => {
      this.emit('completed')

      split({
        element: this.preloaderTextElement,
        expression: ''
      })
      split({
        element: this.preloaderTextElement,
        expression: '<br/>'
      })

      this.countSpans = this.preloaderTextElement.querySelectorAll('span span')

      split({
        element: this.preloaderInfoElement,
        expression: ''
      })
      split({
        element: this.preloaderInfoElement,
        expression: '<br/>'
      })

      this.infoSpans = this.preloaderInfoElement.querySelectorAll('span span')

      this.tlPreloader = gsap.timeline({
        delay: 0
      })

      this.tlPreloader
        .to(this.countSpans, {
          duration: 0.8,
          ease: Power1.easeInOut,
          stagger: 0.05,
          y: '100%'
        })
        .to(this.loadingBarElement, {
          duration: 0.5,
          ease: Power1.easeInOut,
          opacity: 0,
          delay: -1
        })
        .to(this.infoSpans, {
          duration: 0.5,
          ease: Power1.easeInOut,
          stagger: 0.05,
          y: '-100%',
          delay: -1.5
        })
        .to(this.preloaderElement, {
          duration: 0.8,
          ease: Power1.easeInOut,
          stagger: 0.05,
          y: '-100%',
          delay: -0.2
        })
    })
  }
}
