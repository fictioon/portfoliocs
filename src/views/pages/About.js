const aboutView = () => {
  const view = `
    <div class="about">
      <div class="about__wrapper">
        <header class="about__header">
          <div class="about__header__wrapper">
            <div class="about__header__bio">
              <div class="about__header__hi title">¡Hola!</div>
              <h1 class="about__header__title paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                massa odio.
              </h1>
              <p class="about__header__description opacity__inner">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                massa odio, laoreet et enim nec, viverra varius magna. Etiam
                luctus a ante luctus dictum. Duis eget erat at lectus pretium
                consequat. Suspendisse varius imperdiet aliquet.
              </p>
            </div>
            <div class="about__header__portrait">
              <figure class="about__header__media">
                <img
                  class="about__header__image three__image"
                  alt="Cristian Saenz"
                  src="images/about/cristian-saenz-portrait-lost.jpg"
                  data-webgl="image"
                />
              </figure>
            </div>
          </div>
        </header>
        <main class="about__main">
          <div class="about__main__wrapper">
            <section class="section__skills">
              <div class="section__skills__wrapper">
                <h2 class="section__skills__title title__inner">Habilidades</h2>
                <div class="section__skills__content">
                  <div class="section__skills__devdes">
                    <div class="section__skills__devdes__item">
                      <h3 class="skill__title paragraph__inner">Diseño</h3>
                      <div class="skill__items">
                        <div class="skill__item paragraph__inner">Adobe XD</div>
                        <div class="skill__item paragraph__inner">
                          Photoshop
                        </div>
                        <div class="skill__item paragraph__inner">
                          Illustrator
                        </div>
                        <div class="skill__item paragraph__inner">
                          After Effects
                        </div>
                      </div>
                    </div>
                    <div class="section__skills__devdes__item">
                      <h3 class="skill__title paragraph__inner">Desarrollo</h3>
                      <div class="skill__items">
                        <div class="skill__item paragraph__inner">
                          Html Css Js
                        </div>
                        <div class="skill__item paragraph__inner">
                          React Nuxt
                        </div>
                        <div class="skill__item paragraph__inner">
                          Gsap Threejs
                        </div>
                        <div class="skill__item paragraph__inner">GitHub</div>
                        <div class="skill__item paragraph__inner">Tailwind</div>
                      </div>
                    </div>
                  </div>
                  <p class="section__skill__description opacity__inner">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin massa odio, laoreet et enim nec, viverra varius magna.
                    Etiam luctus a ante luctus dictum. Duis eget erat at lectus
                    pretium consequat. Suspendisse varius imperdiet aliquet.
                  </p>
                </div>
                <div class="section__skills__logo">
                  <figure class="section__skills__logo__media">
                    <img
                      class="section__skills__logo__image object__rotate"
                      alt="CS Creative Webs"
                      src="images/home/abstract-figure.svg"
                    />
                  </figure>
                </div>
              </div>
            </section>
            <section class="section__experience">
              <div class="section__experience__wrapper">
                <h2 class="section__experience__title title__inner">
                  Experiencia
                </h2>
                <div class="section__experience__companies">
                  <div class="section__line"></div>
                  <div class="experience__company">
                    <div class="company__info">
                      <h4 class="company__name paragraph__inner">
                        Lupo Digital Hub
                      </h4>
                      <div class="company__positions paragraph__inner">
                        Diseño / Frontend / UxUi
                      </div>
                    </div>
                    <div class="company__duration">
                      <div class="duration__number title__inner">02</div>
                      <div class="duration__year title__inner">Años</div>
                    </div>
                  </div>
                  <div class="section__line"></div>
                  <div class="experience__company">
                    <div class="company__info">
                      <h4 class="company__name paragraph__inner">
                        Surtrek Tour Operator
                      </h4>
                      <div class="company__positions paragraph__inner">
                        Diseño / Frontend / UxUi
                      </div>
                    </div>
                    <div class="company__duration">
                      <div class="duration__number title__inner">08</div>
                      <div class="duration__year title__inner">Años</div>
                    </div>
                  </div>
                  <div class="section__line"></div>
                  <div class="experience__company">
                    <div class="company__info">
                      <h4 class="company__name paragraph__inner">
                        Walker Brand
                      </h4>
                      <div class="company__positions paragraph__inner">
                        Diseño / Adobe Flash Apps / UxUi
                      </div>
                    </div>
                    <div class="company__duration">
                      <div class="duration__number title__inner">02</div>
                      <div class="duration__year title__inner">Años</div>
                    </div>
                  </div>
                  <div class="section__line"></div>
                  <div class="experience__company">
                    <div class="company__info">
                      <h4 class="company__name paragraph__inner">
                        Infoquality
                      </h4>
                      <div class="company__positions paragraph__inner">
                        Diseño / Adobe Flash Apps / UxUi
                      </div>
                    </div>
                    <div class="company__duration">
                      <div class="duration__number title__inner">01</div>
                      <div class="duration__year title__inner">Año</div>
                    </div>
                  </div>
                  <div class="section__line"></div>
                </div>
              </div>
            </section>
            <section class="section__photo">
              <div class="section__photo__wrapper">
                <figure class="section__photo__media">
                  <img
                    class="section__photo__image three__image"
                    alt="Cristian Saenz"
                    src="images/about/cristian-saenz-portrait-hor.jpg"
                    data-webgl="image"
                  />
                </figure>
              </div>
            </section>
            <section class="section__moreinfo">
              <div class="section__moreinfo__wrapper">
                <div class="section__moreinfo__inspiration">
                  <h5 class="section__moreinfo__phrase">
                    <div class="phrase__line paragraph__inner">
                      Intenta aprender algo sobre
                    </div>
                    <div class="phrase__line paragraph__inner">
                      todo y todo sobre algo.
                    </div>
                  </h5>
                  <div class="section__moreinfo__author">
                    <div class="author__line section__line"></div>
                    <div class="author__name title__inner">Thomas_Huxley</div>
                  </div>
                </div>
                <div class="section__moreinfo__description">
                  <p class="section__moreinfo__text opacity__inner">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin massa odio, laoreet et enim nec, viverra varius magna.
                    Etiam luctus a ante luctus dictum. Duis eget erat at lectus
                    pretium consequat. Suspendisse varius imperdiet aliquet.
                  </p>
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
                    src="images/home/abstract-figure.svg"
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
                  href="/"
                  >Contáctame</a
                >
              </div>
            </div>
            <div class="footer__about__contact__networks">
              <ul class="footer__contact__items">
                <li class="footer__network">
                  <a class="word__link" href="/">Linkedin</a>
                </li>
                <li class="footer__network">
                  <a class="word__link" href="/">Instagram</a>
                </li>
                <li class="footer__network">
                  <a class="word__link" href="/">Facebook</a>
                </li>
                <li class="footer__network">
                  <a class="word__link" href="/">Email</a>
                </li>
              </ul>
              <div class="footer__copy">©2022</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  `
  return view
}

export default aboutView()
