import * as THREE from 'three'

import vertex from '../../shaders/vertex.glsl'
import fragment from '../../shaders/fragment.glsl'

export default class About {
  constructor() {
    this.experience = window.experience
    this.scene = this.experience.scene
    this.sizes = this.experience.sizes

    this.photosElements = document.querySelectorAll('.three__image')

    this.scroll = null
    this.materials = []
    this.geometries = []
    this.meshes = []

    this.createGeometry()
    this.createTexture()
    this.createMaterial()
    this.createMesh()
  }

  meshDimensions() {
    this.x = []
    this.y = []

    this.photosElements.forEach((photoElement, index) => {
      const bounds = photoElement.getBoundingClientRect()

      const width = bounds.width / this.sizes.width
      const height = bounds.height / this.sizes.height

      this.meshes[index].scale.x = this.experience.camera.width * width
      this.meshes[index].scale.y = this.experience.camera.height * height

      const x = bounds.left / this.sizes.width

      this.meshes[index].position.x =
        -this.experience.camera.width / 2 +
        this.meshes[index].scale.x / 2 +
        x * this.experience.camera.width

      const y = bounds.top / this.sizes.height

      this.meshes[index].position.y =
        this.experience.camera.height / 2 -
        this.meshes[index].scale.y / 2 -
        y * this.experience.camera.height

      this.x.push(x)
      this.y.push(y)
    })
  }

  createGeometry() {
    this.photosElements.forEach((_) => {
      const geometry = new THREE.PlaneGeometry(1, 1, 100, 100)

      this.geometries.push(geometry)
    })
  }

  createTexture() {
    this.textures = [window.textures[4], window.textures[5]]
  }

  createMaterial() {
    this.textures.forEach((texture) => {
      const material = new THREE.ShaderMaterial({
        uniforms: {
          uTexture: {
            value: texture
          },
          uOffset: {
            value: new THREE.Vector2(0.0, 0.0)
          },
          uEffect: {
            value: new THREE.Vector2(0.0, 0.0)
          },
          uAlpha: {
            value: 1
          }
        },
        vertexShader: vertex,
        fragmentShader: fragment,
        transparent: true,
        side: THREE.DoubleSide
      })

      this.materials.push(material)
    })
  }

  createMesh() {
    this.photosElements.forEach((_, index) => {
      const mesh = new THREE.Mesh(this.geometries[index], this.materials[index])

      this.meshes.push(mesh)

      this.scene.add(mesh)
    })

    this.meshDimensions()
  }

  resize() {
    this.meshDimensions()
  }

  update() {
    this.meshDimensions()

    this.meshes.forEach((_, index) => {
      if (this.scroll) {
        this.materials[index].uniforms.uOffset.value.set(
          this.x[index] * 0.0,
          -(this.scroll.target - this.scroll.current) * 0.00015
        )

        if (window.device === undefined) {
          this.materials[index].uniforms.uEffect.value.set(
            (Math.random() - 0.5) * 0.005,
            (Math.random() - 0.5) * 0.005
          )
        }
      }
    })
  }
}
