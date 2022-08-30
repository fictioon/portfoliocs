import * as THREE from 'three'

import Sizes from '../utils/Sizes'
import Time from '../utils/Time'

import Camera from './elements/Camera'
import Renderer from './elements/Renderer'

import Home from './pages/Home'
import About from './pages/About'

let instance = null

export default class Experience {
  constructor(canvas, template) {
    if (instance) {
      return instance
    }

    instance = this

    window.experience = this
    this.template = template
    this.scroll = null
    this.mouse = null

    this.canvas = canvas
    this.sizes = new Sizes()
    this.time = new Time()
    this.scene = new THREE.Scene()
    this.camera = new Camera()
    this.renderer = new Renderer()

    this.canvasHeight = window.innerHeight
  }

  createHome() {
    this.home = new Home()
  }

  createAbout() {
    this.about = new About()
  }

  loaded() {
    this.changeEnd(this.template)
  }

  changeStart() {}

  changeEnd(template) {
    if (template === 'home') {
      this.destroy()
      this.createHome()
    }
    if (template === 'about') {
      this.destroy()
      this.createAbout()
    }
  }

  resize() {
    this.camera.resize()
    this.renderer.resize()

    if (this.home) {
      this.home.resize()
    }
    if (this.about) {
      this.about.resize()
    }
  }

  update() {
    this.camera.update()
    this.renderer.update()

    if (this.home) {
      this.home.update()
      this.home.scroll = this.scroll
      this.home.mouse = this.mouse
    }
    if (this.about) {
      this.about.update()
      this.about.scroll = this.scroll
    }
  }

  destroy() {
    this.scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose()

        for (const key in child.material) {
          const value = child.material[key]

          if (value && typeof value.dispose === 'function') {
            value.dispose()
          }
        }
      }
    })

    this.renderer.instance.renderLists.dispose()
    this.renderer.instance.dispose()
  }
}
