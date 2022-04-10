import * as THREE from 'three'

export default class Camera {
  constructor() {
    this.experience = window.experience
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.canvas = this.experience.canvas

    this.setInstance()
  }

  setCanvasDimensions() {
    this.canvas.style.height = `${this.sizes.height}px`
    this.canvas.style.width = `${this.sizes.width}px`
  }

  setInstance() {
    this.instance = new THREE.PerspectiveCamera()
    this.instance.position.z = 1000

    this.cameraDimensions()

    this.scene.add(this.instance)
  }

  cameraDimensions() {
    this.fov = this.instance.fov * (Math.PI / 180)
    
    this.height = 2 * Math.tan(this.fov / 2) * this.instance.position.z
    this.width = this.height * this.instance.aspect

    this.instance.aspect = this.sizes.width / this.sizes.height
    this.instance.updateProjectionMatrix()
    
    this.setCanvasDimensions();
  }

  update() {
    this.cameraDimensions()
  }

  resize() {
    this.cameraDimensions()
  }
}