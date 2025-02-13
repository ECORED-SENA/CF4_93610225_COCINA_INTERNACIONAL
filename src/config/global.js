export default {
  global: {
    Name: 'Cocina americana',
    Description:
      'La gastronomía de América incluye platos icónicos como el <em>clam chowder</em> de Nueva Inglaterra, la barbacoa de Virginia, el <em>jambalaya</em> de Louisiana, los tacos de México, el <em>mofongo</em> de Puerto Rico, el ceviche peruano, y el <em>choripán</em> argentino. Destacan técnicas como marinados prolongados, cocción lenta y el uso de ingredientes autóctonos que realzan sabores únicos en cada región.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Cocina de Norte América',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Cocina de Centro América',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Cocina de Sur América',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Cocina de Norte América.',
      referencia:
        'SENA. (2012). Cocina internacional cap 4 [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9Ql1vdfQsLw&ab_channel=SENA',
    },
    {
      tema: 'Cocina de Norte América.',
      referencia:
        'Food Wishes. (2017). Tourtiere - Pastel de carne navideño - Food Wishes. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=0TKzJZQc6fl&ab_channel=FoodWishes',
    },
    {
      tema: 'Cocina de Centro América.',
      referencia:
        'TULIO Recomienda. (2022). Cómo hacer los MEJORES TACOS CASEROS | ¡Con tus Propias Tortillas! | Receta Fácil . [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=uFGFtLB7hWw&ab_channel=TULIORecomienda',
    },
    {
      tema: 'Cocina de Sur América.',
      referencia:
        'Buenazo!. (2020). Receta de la causa limeña de pollo peruana • Receta casera • Peruvian food | BUENAZO!. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=UbbSMZrosZk&ab_channel=Buenazo%21',
    },
    {
      tema: 'Cocina de Sur América.',
      referencia:
        'COOK WOW. (2018). CHORIPAN - Cómo hacer Choripanes 🌭 (#56).',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1k7XUYc8s7c&ab_channel=COOKWOW',
    },
  ],
  glosario: [
    {
      termino: 'Alcapurrias',
      significado:
        'fritura hecha de plátanos rallados o yautía, rellena de carne.',
    },
    {
      termino: 'Asado',
      significado: 'carne asada.',
    },
    {
      termino: 'Barbecue ribs',
      significado: 'costillas a la barbacoa.',
    },
    {
      termino: '<em>Bowl</em>',
      significado: 'tazón.',
    },
    {
      termino: 'Causa limeña',
      significado: 'preparación peruana de origen precolombino.',
    },
    {
      termino: 'Ceviche',
      significado:
        'preparación hecha a base de pescado o marisco crudo, limón o naranja, cebolla, sal y ají.',
    },
    {
      termino: 'Chivito',
      significado:
        'pan relleno de carne asada a la plancha, con varios aditivos.',
    },
    {
      termino: '<em>Congrí</em>',
      significado: 'preparación de arroz con frijoles negros.',
    },
  ],
  referencias: [
    {
      referencia: 'Cocinachic.net. (2015). <em>Ceviche</em>.',
      link: '',
    },
    {
      referencia: 'Madcaro. (2011). <em>Clam chowder</em>.',
      link: '',
    },
    {
      referencia: 'Wixstatic. (2016). <em>Horneado de chancho</em>. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
