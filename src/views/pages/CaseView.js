import each from 'lodash/each'

import data from '../../data/cases'
import abstractImg from '../../assets/images/home/abstract-figure.svg'
import starImg from '../../assets/images/home/star-figure.svg'

export default class CaseView {
  constructor() {
    this.id = ''
    this.content = {}
    this.html = ''
    this.links = []
  }

  getLink(id) {
    each(data, (item) => {
      this.links.push(item.url)
    })

    let newId = id
    newId++

    if (newId === this.links.length) {
      newId = 0
    }

    return this.links[newId]
  }

  getId() {
    const path = location.pathname
    const pathSplit = path.split('/')

    this.id = pathSplit[2]
  }

  getData() {
    this.getId()
    this.content = data[this.id]

    this.createContent()
  }

  createContent() {
    this.html = `
      <div class="case">
        <div class="case__wrapper">
          <header class="case__header">
            <div class="case__header__wrapper">
              <h1 class="case__title title">${this.content.title}</h1>
            </div>
          </header>
          <main class="case__main">
            <div class="case__main__wrapper">
              <section class="case__section">
                <div class="case__section__wrapper">
                  <div class="case__left">
                    <div class="case__left__wrapper">
                      <div class="case__left__info">
                        <h2 class="case__left__title paragraph">${
                          this.content.subtitle
                        }</h2>
                        <p class="case__left__text opacity__inner">
                          ${this.content.text}
                        </p>
                        <div class="case__left__items">
                          <div class="case__left__item">
                            <div class="case__left__item__title title__inner">Año</div>
                            <div class="case__left__item__text">
                              <span class="title__inner">${
                                this.content.year
                              }</span>
                            </div>
                          </div>
                          <div class="case__left__item">
                            <div class="case__left__item__title title__inner">Rol</div>
                            <div class="case__left__item__text">
                              ${this.content.roles
                                .map(
                                  (rol) =>
                                    `<span class="title__inner">${rol}</span>`
                                )
                                .join('')}
                            </div>
                          </div>
                          <div class="case__left__item">
                            <div class="case__left__item__title title__inner">Tecnologías</div>
                            <div class="case__left__item__text">
                              ${this.content.techs
                                .map(
                                  (tech) =>
                                    `<span class="title__inner">${tech}</span>`
                                )
                                .join('')}
                            </div>
                          </div>
                        </div>
                      </div>
                      <figure class="case__left__abstract__media">
                        <img
                          class="case__left__abstract__image object__rotate__inverse"
                          alt="CS Creative Webs"
                          src="${starImg}"
                        />
                      </figure>
                      ${
                        this.content.visit
                          ? `<a class="case__left__link word__link" target="_blank" href="${this.content.visit}">
                        Visitar el sitio ->
                      </a>`
                          : ''
                      }
                    </div>
                  </div>
                  <div class="case__right">
                    <div class="case__right__wrapper">
                    ${this.content.images
                      .map(
                        (image) => `
                          <figure class="case__right__media">
                            <img
                              class="case__right__image three__image"
                              src="${image}"
                              alt=""
                              data-webgl="image"
                            />
                          </figure>`
                      )
                      .join('')}
                    </div>
                  </div>
                </div>
              </section>
              <section class="case__next__section">
                <div class="case__next__section__wrapper">
                  <a class="next__section__link nav__link" href="/caso/${this.getLink(
                    this.content.id
                  )}">
                    <div class="next__section__link__line"></div>
                    <div class="next__section__link__info">
                      <div class="next__section__link__text">Siguiente caso</div>
                      <div class="next__section__link__case">${this.getLink(
                        this.content.id
                      )}</div>
                    </div>
                  </a>
                </div>
              </section>
            </div>
          </main>
          <footer class="footer__contact">
            <div class="footer__contact__wrapper">
              <div class="footer__contact__main">
                <div class="footer__contact__logo">
                  <figure class="footer__contact__logo__media">
                    <img
                      class="footer__contact__logo__image object__rotate"
                      alt="CS Creative Webs"
                      src="${abstractImg}"
                    />
                  </figure>
                </div>
                <div class="footer__contact__advice">
                  <h2 class="footer__contact__text">
                    <div class="footer__advice__line title__inner">
                      ¿Tienes_un
                    </div>
                    <div class="footer__advice__line title__inner">proyecto</div>
                    <div class="footer__advice__line title__inner">en_mente?</div>
                  </h2>
                  <a
                    class="footer__contact__label word__link title__inner"
                    href="mailto:cristianmsaenza@gmail.com"
                    >Contáctame</a
                  >
                </div>
              </div>
              <div class="footer__about__contact__networks">
                <ul class="footer__contact__items">
                  <li class="footer__network">
                    <a class="word__link" href="https://www.linkedin.com/in/cristian-s%C3%A1enz-3b889b3b/" target="_blank">Linkedin</a>
                  </li>
                  <li class="footer__network">
                    <a class="word__link" href="https://www.instagram.com/cscreativedev/" target="_blank">Instagram</a>
                  </li>
                  <li class="footer__network">
                    <a class="word__link" href="https://www.facebook.com/cscreativedev" target="_blank">Facebook</a>
                  </li>
                  <li class="footer__network">
                    <a class="word__link" href="mailto:cristianmsaenza@gmail.com">Email</a>
                  </li>
                </ul>
                <div class="footer__copy">©2022</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    `
  }
}
