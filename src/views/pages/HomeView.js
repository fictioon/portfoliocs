import abstractImg from '../../assets/images/home/abstract-figure.svg'
import portraitImg from '../../assets/images/home/cristian-saenz-portrait.jpg'
import starImg from '../../assets/images/home/star-figure.svg'
import project1Img from '../../assets/images/home/project1-cscreativedev.jpg'
import project2Img from '../../assets/images/home/project2-cscreativedev.jpg'
import project3Img from '../../assets/images/home/project3-cscreativedev.jpg'

export default class HomeView {
  constructor() {
    this.html = ''
  }

  getData() {
    this.createContent()
  }

  createContent() {
    this.html = `
    <div class="home">
      <div class="home__wrapper">
        <header class="home__header">
          <div class="home__header__wrapper">
            <div class="header__title">
              <h1 class="header__title__wrapper">
                <div class="header__title__dev title">Desarrollador</div>
                <div class="header__title__mix">
                  <div class="header__title__web title">web</div>
                  <div class="header__title__eye paragraph">con ojos de</div>
                </div>
                <div class="header__title__des title">diseñador</div>
              </h1>
            </div>
            <div class="header__subtitle">
              <h2 class="header__subtitle__wrapper paragraph">
                web frontend design motion interaction branding
              </h2>
            </div>
            <div class="header__contact">
              <div class="header__contact__wrapper">
                <ul class="header__networks">
                  <li class="header__network">
                    <a class="word__link" href="https://www.linkedin.com/in/cristian-s%C3%A1enz-3b889b3b/" target="_blank">Linkedin</a>
                  </li>
                  <li class="header__network">
                    <a class="word__link" href="https://www.instagram.com/cscreativedev/" target="_blank">Instagram</a>
                  </li>
                  <li class="header__network">
                    <a class="word__link" href="https://www.facebook.com/cscreativedev" target="_blank">Facebook</a>
                  </li>
                </ul>
                <div class="header__mail">
                  <a class="word__link" href="mailto:cristianmsaenza@gmail.com">Email</a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main class="home__main">
          <div class="home__main__wrapper">
            <section class="section__bio">
              <div class="section__bio__wrapper">
                <div class="section__bio__description">
                  <div class="section__bio__description__wrapper">
                    <p class="section__bio__text paragraph__inner">
                      Mi nombre es Cristian Sáenz, soy diseñador con más de 10 años de experiencia.
                    </p>
                    <div class="section__bio__logo">
                      <figure class="section__bio__logo__media">
                        <img
                          class="section__bio__logo__image object__rotate"
                          alt="CS Creative Webs"
                          src="${abstractImg}"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div class="section__bio__portrait">
                  <figure class="section__bio__media">
                    <img
                      class="section__bio__image three__image"
                      alt="Cristian Sáenz"
                      src="${portraitImg}"
                      data-webgl="image"
                    />
                  </figure>
                </div>
              </div>
            </section>
            <section class="section__description">
              <div class="section__description__wrapper">
                <div class="section__description__principal">
                  <p class="section__principal paragraph__inner">
                    Un desarrollador que entiende el diseño hace la diferencia al incorporar tu marca en un entorno web.
                  </p>
                  <p class="section__principal paragraph__inner">
                    Gráficos en movimiento, experiencias inusuales, mueven el corazón de los usuarios.
                  </p>
                  <p class="section__principal paragraph__inner">
                    Un sitio web es más que transmitir información, haz que tu marca sea especial.
                  </p>
                </div>
                <div class="section__description__highlights">
                  <h2 class="section__highlight">
                    <div class="section__highlight__line paragraph__inner">
                      desarrollador web
                    </div>
                    <div class="section__highlight__line paragraph__inner">
                      para marketing.
                    </div>
                  </h2>
                </div>
                <div class="section__description__star">
                  <figure class="section__description__star__media">
                    <img
                      class="section__description__star__image object__rotate"
                      alt="Star"
                      src="${starImg}"
                    />
                  </figure>
                </div>
              </div>
            </section>
            <section class="section__cases">
          <div class="section__cases__wrapper">
            <h2 class="section__cases__h2 title__inner">
              Proyectos
            </h2>
            <div class="section__cases__help">drag -></div>
            <div class="section__cases__all">
              <div class="section__cases__all__wrapper">
                <div class="section__case">
                  <div class="section__case__wrapper">
                    <div class="section__case__name title__inner">
                      Ecuatraveling
                    </div>
                    <a
                      class="section__case__link nav__link"
                      href="/caso/ecuatraveling"
                    >
                      <figure class="section__case__media">
                        <img
                          class="section__case__image three__image"
                          src="${project1Img}"
                          alt=""
                          data-webgl="image"
                        />
                      </figure>
                    </a>
                    <div class="section__case__number title__inner">01</div>
                  </div>
                </div>
                <div class="section__case">
                  <div class="section__case__wrapper">
                    <div class="section__case__name title__inner">
                      Zinetikan
                    </div>
                    <a
                      class="section__case__link nav__link"
                      href="/caso/zinetikan"
                    >
                      <figure class="section__case__media">
                        <img
                          class="section__case__image three__image"
                          src="${project2Img}"
                          alt=""
                          data-webgl="image"
                        />
                      </figure>
                    </a>
                    <div class="section__case__number title__inner">02</div>
                  </div>
                </div>
                <div class="section__case">
                  <div class="section__case__wrapper">
                    <div class="section__case__name title__inner">Pencil</div>
                    <a
                      class="section__case__link nav__link"
                      href="/caso/pencil"
                    >
                      <figure class="section__case__media">
                        <img
                          class="section__case__image three__image"
                          src="${project3Img}"
                          alt=""
                          data-webgl="image"
                        />
                      </figure>
                    </a>
                    <div class="section__case__number title__inner">03</div>
                  </div>
                </div>
              </div>
            </div>
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
            <div class="footer__contact__networks">
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
              <div class="footer__copy">©2023</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
    `
  }
}
