import * as THREE from 'three'

import Sizes from '../utils/Sizes'
import Time from '../utils/Time'

import Camera from './elements/Camera'
import Renderer from './elements/Renderer'

import Home from './pages/Home'
import About from './pages/About'
import Case from './pages/Case'

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

  createCase() {
    this.case = new Case()
  }

  loaded() {
    this.changeEnd(this.template)
  }

  changeStart() {}

  changeEnd(template) {
    this.destroy(this.scene)

    if (template === 'home') {
      this.createHome()
    }
    if (template === 'about') {
      this.createAbout()
    }
    if (template === 'case') {
      this.createCase()
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
    if (this.case) {
      this.case.resize()
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
    if (this.case) {
      this.case.update()
      this.case.scroll = this.scroll
    }
  }

  destroy(obj) {
    while (obj.children.length > 0) {
      this.destroy(obj.children[0])
      obj.remove(obj.children[0])
    }
    if (obj.geometry) obj.geometry.dispose()

    if (obj.material) {
      Object.keys(obj.material).forEach((prop) => {
        if (!obj.material[prop]) return
        if (
          obj.material[prop] !== null &&
          typeof obj.material[prop].dispose === 'function'
        )
          obj.material[prop].dispose()
      })
      obj.material.dispose()
    }
  }
}
