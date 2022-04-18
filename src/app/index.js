import Router from '../Router'

import NormalizeWheel from 'normalize-wheel'
import each from 'lodash/each'

import preloaderView from '../views/partials/Preloader'
import navigationView from '../views/partials/Navigation'
import loadPageView from '../views/partials/LoadPage'

import homeView from '../views/pages/Home'
import aboutView from '../views/pages/About'

import Time from './utils/Time'
import Sizes from './utils/Sizes'

import Experience from './Experience'

import Preloader from './components/Preloader'
import Navigation from './components/Navigation'
import LoadPage from './components/LoadPage'

import Home from './pages/Home'
import About from './pages/About'

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
    this.routes = [
      {
        path: '',
        action: () => {
          this.createContent({ template: 'home' })
        }
      },
      {
        path: 'acerca-de-mi',
        action: () => {
          this.createContent({ template: 'about' })
        }
      }
    ]

    this.router = new Router(this.routes)
  }

  async createPartials() {
    this.partials = [
      {
        name: 'preloader',
        view: preloaderView
      },
      {
        name: 'navigation',
        view: navigationView
      },
      {
        name: 'loadpage',
        view: loadPageView
      }
    ]

    await each(this.partials, (partial) => {
      const html = partial.view
      const content = document.querySelector(`.${partial.name}`)
      content.innerHTML = html
    })
  }

  async createContent({ template }) {
    this.template = template

    this.views = {
      home: homeView,
      about: aboutView
    }

    const html = await this.views[this.template]

    this.content = document.querySelector('.content')
    this.content.innerHTML = html

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
