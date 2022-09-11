import Router from '../routing/Router'

import NormalizeWheel from 'normalize-wheel'
import each from 'lodash/each'

import preloaderView from '../views/partials/Preloader'
import navigationView from '../views/partials/Navigation'
import loadPageView from '../views/partials/LoadPage'

import homeView from '../views/pages/Home'
import aboutView from '../views/pages/About'
import HomeView from '../views/pages/HomeView'
import AboutView from '../views/pages/AboutView'
import CaseView from '../views/pages/CaseView'

import Time from './utils/Time'
import Sizes from './utils/Sizes'

import Experience from './Experience'

import Preloader from './components/Preloader'
import Navigation from './components/Navigation'
import LoadPage from './components/LoadPage'

import Home from './pages/Home'
import About from './pages/About'
import Case from './pages/Case'

class App {
  constructor() {
    this.time = new Time()
    this.sizes = new Sizes()

    this.createRoutes()
    this.createPartials()
    this.createExperience()

    this.createPreloader()
    this.createNavigation()

    this.addEventListeners()
    this.addLinkListeners()

    this.sizes.on('resize', () => {
      this.resize()
    })

    this.time.on('tick', () => {
      this.update()
    })
  }

  createRoutes() {
    this.routes = {
      '/': {
        action: () => this.createContent({ template: 'home' })
      },
      '/acerca-de-mi': {
        action: () => this.createContent({ template: 'about' })
      },
      '/caso/:id': {
        action: () => this.createContent({ template: 'case' })
      }
    }
    this.router = new Router(this.routes)
  }

  async createPartials() {
    this.partials = {
      preloader: preloaderView,
      navigation: navigationView,
      loadpage: loadPageView
    }

    for (const partial in this.partials) {
      const html = this.partials[partial]
      const content = document.querySelector(`.${partial}`)
      content.innerHTML = html
    }
  }

  async createContent({ template }) {
    this.template = template
    let html = ''

    this.views = {
      home: new HomeView(),
      about: new AboutView(),
      case: new CaseView()
    }

    await this.views[this.template].getData()
    html = this.views[this.template].html

    this.content = document.querySelector('.content')
    this.content.innerHTML = html

    this.addLinkListeners()
    this.createPage()
  }

  createExperience() {
    const canvas = document.querySelector('canvas.webgl')
    this.experience = new Experience(canvas, this.template)
  }

  createPreloader() {
    this.preloader = new Preloader()
    this.preloader.once('completed', this.loaded.bind(this))
  }

  createNavigation() {
    this.navigation = new Navigation({
      template: this.template
    })
  }

  createPage() {
    if (this.template === 'home') {
      this.page = new Home()
    }

    if (this.template === 'about') {
      this.page = new About()
    }

    if (this.template === 'case') {
      this.page = new Case()
    }
  }

  createLoadPage() {
    this.page.hide()
    this.loadPage = new LoadPage()
  }

  loaded() {
    this.experience.loaded()
    this.page.loaded({ delay: 0.7 })
  }

  popState() {
    this.change({
      url: window.location.pathname,
      push: false
    })
  }

  async change({ url, push }) {
    this.createLoadPage()
    await this.loadPage.loading()

    await this.router.navigate(url, push)

    this.navigation.change(this.template)

    this.experience.changeEnd(this.template)

    this.page.loaded({ delay: 1 })

    this.addLinkListeners()
  }

  resize() {
    this.page.resize()
    this.experience.resize()
  }

  wheel(event) {
    const normalizedWheel = NormalizeWheel(event)
    this.page.wheel(normalizedWheel)
  }

  mouseDown(event) {
    this.page.mouseDown(event)
  }
  mouseMove(event) {
    this.page.mouseMove(event)
  }
  mouseUp(event) {
    this.page.mouseUp(event)
  }

  touchDown(event) {
    this.page.touchDown(event)
  }
  touchMove(event) {
    this.page.touchMove(event)
  }
  touchUp(event) {
    this.page.touchUp(event)
  }

  update() {
    this.page.update()
    this.experience.update()
  }

  addEventListeners() {
    window.addEventListener('mousewheel', this.wheel.bind(this))
    window.addEventListener('DOMMouseScroll', this.wheel.bind(this))

    window.addEventListener('mousedown', this.mouseDown.bind(this))
    window.addEventListener('mousemove', this.mouseMove.bind(this))
    window.addEventListener('mouseup', this.mouseUp.bind(this))

    window.addEventListener('touchstart', this.touchDown.bind(this))
    window.addEventListener('touchmove', this.touchMove.bind(this))
    window.addEventListener('touchend', this.touchUp.bind(this))

    window.addEventListener('popstate', this.popState.bind(this))
  }

  addLinkListeners() {
    const links = document.querySelectorAll('.nav__link')

    each(links, (link) => {
      link.onclick = (event) => {
        event.preventDefault()
        const href = link.getAttribute('href')

        this.navigation.disableLinks()
        this.change({ url: href, push: true })
      }
    })
  }
}

new App()
