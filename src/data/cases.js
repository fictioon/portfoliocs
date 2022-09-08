import ecuatraveling1 from '../assets/images/cases/ecuatraveling/ecuatraveling-1.jpg'
import ecuatraveling2 from '../assets/images/cases/ecuatraveling/ecuatraveling-2.jpg'
import ecuatraveling3 from '../assets/images/cases/ecuatraveling/ecuatraveling-3.jpg'
import ecuatraveling4 from '../assets/images/cases/ecuatraveling/ecuatraveling-4.jpg'

import pencil1 from '../assets/images/cases/pencil/pencil-1.jpg'
import pencil2 from '../assets/images/cases/pencil/pencil-2.jpg'
import pencil3 from '../assets/images/cases/pencil/pencil-3.jpg'
import pencil4 from '../assets/images/cases/pencil/pencil-4.jpg'

import zinetikan1 from '../assets/images/cases/zinetikan/zinetikan-1.jpg'
import zinetikan2 from '../assets/images/cases/zinetikan/zinetikan-2.jpg'
import zinetikan3 from '../assets/images/cases/zinetikan/zinetikan-3.jpg'
import zinetikan4 from '../assets/images/cases/zinetikan/zinetikan-4.jpg'

const cases = {
  ecuatraveling: {
    id: 0,
    title: 'Ecuatraveling',
    subtitle: 'Agencia de viajes',
    text: 'Esta página actualmente esta en desarrollo, el cliente corresponde a una agencia de viajes receptiva líder en Ecuador. Tanto el concepto como el diseño de experiencia fue realizado desde cero tomando como importante la parte visual y llamativa de las fotografías, conectado así con los turistas que desean visitar Ecuador. Animaciones sencillas y un diseño contemporaneo hace que esta página denote profesionalismo y seguridad para sus clientes.',
    year: '2022',
    roles: ['Diseño', 'ux/ui', 'Front-end'],
    techs: ['NuxtJS', 'Strapi'],
    images: [ecuatraveling1, ecuatraveling2, ecuatraveling3, ecuatraveling4],
    ids: [6, 7, 8, 9],
    url: 'ecuatraveling',
    visit: null
  },
  pencil: {
    id: 1,
    title: 'Pencil',
    subtitle: 'Agencia de marketing',
    text: 'El sitio web fue diseñado para mi aprendizaje, se trata de una agencia ficticia de marketing digital y desarrollo web llamada "Pecil". El concepto gráfico fue plasmado a través del minimalismo con colores fuertes. Cada sección de la página cuenta con información detallada acerca de los servicios que ofrece, como planes y métodos de ejecución.',
    year: '2021',
    roles: ['Diseño', 'ux/ui', 'Front-end'],
    techs: ['ReactJS'],
    images: [pencil1, pencil2, pencil3, pencil4],
    ids: [10, 11, 12, 13],
    url: 'pencil',
    visit: null
  },
  zinetikan: {
    id: 2,
    title: 'Zinetikan',
    subtitle: 'Sistema contable',
    text: 'Esta página fue creada para la presentación de un sistema contable de facturación online, aquí los usuarios podrán registrarse, ver las características que possee y acceder a los beneficios de la misma. Para este proyecto se elaboró el logo y el concepto gráfico.',
    year: '2021',
    roles: ['Diseño', 'ux/ui', 'Front-end'],
    techs: ['ReactJS'],
    images: [zinetikan1, zinetikan2, zinetikan3, zinetikan4],
    ids: [14, 15, 16, 17],
    url: 'zinetikan',
    visit: 'https://zinetikan.com/'
  }
}

export default cases
