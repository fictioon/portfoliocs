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

  changeStart() {
    
  }

  changeEnd(template) {
    if (template === 'home') {
      this.destroyAbout()
      this.createHome()
    }
    if (template === 'about') {
      this.destroyHome()
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
    }
    if (this.about) {
      this.about.update()
      this.about.scroll = this.scroll
    }
  }

  destroyHome() {
    if (this.home) {
      this.home.destroy()
    }
  }

  destroyAbout() {
    if (this.about) {
      this.about.destroy()
    }
  }
}