const navigationView = () => {
  const view = `
    <div class="navigation__wrapper">
      <a class="navigation__logo nav__link word__link" href="/"
        >Cristian Sáenz</a
      >
      <ul class="navigation__list">
        <li class="navigation__list__item">
          <a class="navigation__list__link nav__link word__link" href="/about"
            >Acerca de mi</a
          >
        </li>
      </ul>
    </div>
  `
  return view
}

export default navigationView()
