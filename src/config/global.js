export default {
  global: {
    componenteFormativo: 'Gestión y control de bases de datos',
    descripcionCurso:
      'En la actualidad, las bases de datos son fundamentales para las empresas. La información es considerada uno de los principales activos de empresas, proyectos, programas y organizaciones; así mismo, se considera como un patrimonio adquirido a través de los procesos y el tiempo. La información es un elemento de gran aporte para la construcción y aplicación de estrategias que, entre otras, permiten obtener solidez en las ventas, consolidando redes de proveedores y clientes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['animation-size-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-1', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['animation-size-2', 'd-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Gestión de cuentas de usuario',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Automatización de tareas',
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
      tema: 'Automatización de tareas',
      referencia: 'Zk. (2019). Comandos <i>grant y revoke</i> MySQL.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=oICTXgcqfRw',
    },
    {
      tema: 'Gestión de cuentas de usuario',
      referencia:
        '<em>Oracle and/or its affiliates. (2011). MySQL 5.0 reference manual.</em>',
      tipo: 'PDF',
      link: 'https://downloads.mysql.com/docs/refman-5.0-es.a4.pdf',
    },
    {
      tema: 'Automatización de tareas',
      referencia:
        'Sarasa, A. (2016). <em>Introducción a las bases de datos NoSQL usando MongoDB.</em> Editorial UOC.',
      tipo: 'PDF',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/58524?page=14',
    },
    {
      tema: 'Automatización de tareas',
      referencia:
        'Martínez, D. & Tejada, L. (2019). <em>Manual de bases de datos.</em> Universidad Abierta para Adultos (UAPA).',
      tipo: 'PDF',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/175897?page=166',
    },
  ],
  glosario: [
    {
      termino: 'Bases de datos',
      significado:
        'También banco de datos, es un conjunto de información perteneciente a un mismo contexto que se ordena de modo sistemático en una aplicación digital para su posterior consulta y análisis.',
    },
    {
      termino: 'Copias',
      significado: 'Escribir en una parte lo que está escrito en otra.',
    },
    {
      termino: 'DCL',
      significado:
        'Lenguaje de Control de Datos. Controlar el acceso de usuario a las tablas o registros de base de datos y a su contenido.',
    },
    {
      termino: 'Eventos',
      significado:
        'Tareas que se programan en un sistema gestor de base de datos en un momento de tiempo determinado.',
    },
    {
      termino: 'Índices',
      significado:
        'Son un tipo de acción que apunta a una o varias columnas almacenando información relacionada entre el contenido de la columna y el puntero de búsqueda.',
    },
    {
      termino: '<em>MySQL Workbench</em>',
      significado:
        'Herramienta muy utilizada por las empresas para el modelado de datos, está dada para el desarrollo <em>SQL</em> y diseño, gestión, administración y mantenimiento de bases de datos. Creado por la empresa <em>Oracle</em> se puede instalar en <em>Windows, Linux</em> y <em>Mac OS</em>.',
    },
    {
      termino: 'Rol',
      significado:
        'Funciones que le son atribuidas a una persona para que, en determinadas situaciones o circunstancias, actúe o se comporte de acuerdo a un conjunto de pautas, en satisfacción de una serie de expectativas.',
    },
    {
      termino: '<em>Scripts</em>',
      significado:
        'Término informal que se usa para designar a un programa relativamente simple.',
    },
    {
      termino: 'Seguridad',
      significado:
        'Conjunto de herramientas, medidas y controles diseñados para establecer y mantener la confidencialidad, la integridad y la disponibilidad de las bases de datos.',
    },
    {
      termino: '<em>Trigger</em>',
      significado:
        'También conocidos como disparadores de base de datos, son bloques <em>PL/SQL</em>, programa de almacenados que se ejecutan o disparan automáticamente cuando se producen acciones como insertar, actualizar o eliminar.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguilar, J. (s.f.). <i>HeidiSQL para la gestión de bases de datos grandes</i>. Blogspot.',
      link:
        'https://www.jose-aguilar.com/blog/wp-content/uploads/2013/10/heidi-sql.png',
    },
    {
      referencia:
        'Capacho, J. & Nieto, W. (2017).<i> Diseño de base de datos</i>. Universidad del Norte.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/70030?page=61',
    },
    {
      referencia:
        'Coronel, C., Morris, S. & Rob, P. (2011). <i>Bases de datos: diseño, implementación y administración</i>. Cengage Learning.',
      link: 'https://issuu.com/cengagelatam/docs/bases_de_datos_coronel',
    },
    {
      referencia:
        'Hueso, L. (2016). <i>Administración de sistemas gestores de bases de datos</i>. Ediciones de la U.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=7943',
    },
    {
      referencia:
        'Kinsta. (2021). <i>Explorando una base de datos de WordPress con Adminer</i>.',
      link:
        'https://kinsta.com/wp-content/uploads/2021/01/Exploring-WordPress-Database-With-Adminer.png',
    },
    {
      referencia:
        'Martínez, D. y Tejada, L. (2019). <i>Manual de bases de datos</i>. Universidad Abierta para Adultos (UAPA).',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/175897?page=166.',
    },
    {
      referencia:
        'MySQL. (2022). Create procedure y create function. <i>En Manual de referencia de mysql 8.0.</i>',
      link: 'https://dev.mysql.com/doc/refman/8.0/en/create-procedure.html',
    },
    {
      referencia:
        'Pulido, E., Escobar, O. & Núñez, J. (2019). <em>Base de datos.</em> Grupo Editorial Patria.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/121283',
    },
    {
      referencia:
        'Sarasa, A. (2016). <em>Introducción a las bases de datos NoSQL usando MongoDB.</em> Editorial UOC.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/58524?page=291',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
