import each from 'lodash/each'

export default class Navigation {
  constructor({ template }) {
    this.template = template
    this.links = document.querySelectorAll('.nav__link')
    this.disableLinks()
    this.enableLink(this.template)
  }

  change(template) {
    this.enableLink(template)
  }

  disableLinks() {
    each(this.links, (link) => {
      link.style.pointerEvents = 'none'
    })
  }

  enableLink(template) {
    if (template === 'home') {
      this.links[1].style.pointerEvents = null
    }
    if (template === 'about') {
      this.links[0].style.pointerEvents = null
    }
  }
}
