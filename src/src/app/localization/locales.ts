import { dot } from 'src/app/utils';
import { Storage } from '../storage';

export const EnglishLanguageCode = 'en-US';

export const Locales = {
  mainSummarySection: {
    jobTitle: {
      'en-US': 'Web Developer',
      'es-MX': 'Desarrollador Web',
    },
    description: {
      'en-US': `I'm a fullstack web developer. UI/UX, APIs, microservices, databases, 3rd party integrations, CI/CD, you name it!`,
      'es-MX':
        'Soy un desarrollador web fullstack. UI/UX, APIs, microservicios, bases de datos, integraciones de terceros, CI/CD, !lo que sea!',
    },
    subtitle: {
      'en-US': `Let's get in touch!`,
      'es-MX': '¡Mantengámonos en contacto!',
    },
  }, // mainSummarySection
  langModal: {
    title: {
      'en-US': 'Choose a language',
      'es-MX': 'Selecciona un idioma',
    },
    optionEnglish: {
      'en-US': 'English',
      'es-MX': 'Inglés',
    },
    optionSpanish: {
      'en-US': 'Spanish',
      'es-MX': 'Español',
    },
  }, // langModal
  menuFab: {
    home: {
      'en-US': 'Home',
      'es-MX': 'Inicio',
    },
    aboutMe: {
      'en-US': 'About Me',
      'es-MX': 'Sobre Mí',
    },
    myExp: {
      'en-US': 'My Experience',
      'es-MX': 'Mi Experiencia',
    },
    myFavTech: {
      'en-US': 'My Favorite Tech',
      'es-MX': 'Mis Tecnologías Favoritas',
    },
    sideProjects: {
      'en-US': 'Side Projects',
      'es-MX': 'Otros Proyectos',
    },
    funFacts: {
      'en-US': 'Fun Facts',
      'es-MX': 'Datos Curiosos',
    },
  }, // menuFab
  aboutMeSection: {
    title: {
      'en-US': 'About Me',
      'es-MX': 'Sobre Mí',
    },
    paragraph: {
      'en-US': `
      I have experience developing, maintaining and supervising web applications.<br><br>
      I specialize in .NET Core + Angular applications, but can easily adapt to any other frameworks.<br><br>
      I've worked in the frontend building SPAs, in the backend building REST APIs and microservices, relational and non-relational databases, wired up 3rd party libraries and plugins, published re-usable libraries and written scripts for automation.<br><br>
      I know how to manage version control with GitHub and Azure Repos and I’ve setup CI/CD pipelines.<br><br>
      I have a strong base of Object Oriented Programming and I’m a hug fan of good coding conventions. I daily practice clean code, design patterns and implement robust/scalable software architechures.`,

      'es-MX': `
      Tengo experiencia en desarrollo, mantenimiento y supervisión de aplicaciones web.<br><br>
      Me especializo en aplicaciones .NET Core + Angular, pero puedo adaptarme fácilmente a cualquier otro marco.<br><br>
      He trabajado en el frontend construyendo SPAs, en el backend construyendo REST APIs y microservicios, bases de datos relacionales y no relacionales, he integrado bibliotecas y plugins de terceros, he publicado librerías reutilizables y he escrito scripts para automatización.<br><br>
      Sé cómo manejar control de versiones con GitHub y Azure Repos y he configurado pipelines de CI/CD.<br><br>
      Tengo una base sólida de Programación Orientada a Objetos y soy un gran fanático de las buenas convenciones de código. Diariamente practico código limpio, patrones de diseño e implemento arquitecturas de software robustas/escalables.
      `,
    },
  }, // aboutMeSection
  myWorkExpSection: {
    title: {
      'en-US': 'My Work Experience',
      'es-MX': 'Mi Experiencia',
    },
    present: {
      'en-US': 'Today',
      'es-MX': 'Presente',
    },
    fulltime: {
      'en-US': 'Full-time',
      'es-MX': 'Tiempo completo',
    },
    parttime: {
      'en-US': 'Part-time',
      'es-MX': 'Medio tiempo',
    },
    insource: {
      'en-US': 'Insource',
      'es-MX': 'Interno',
    },
    outsource: {
      'en-US': 'Outsource',
      'es-MX': 'Externo',
    },
    onshore: {
      'en-US': 'Onshore',
      'es-MX': 'Oficina',
    },
    offshore: {
      'en-US': 'Offshore',
      'es-MX': 'Remoto',
    },
    jobs: {
      asterias: {
        jobTitle: {
          'en-US': `Tech Lead / Fullstack Developer`,
          'es-MX': `Tech Lead / Desarrollador Fullstack`,
        },
        companyName: {
          'en-US': `startup company <a href="https://asterias.com.mx/" target="_blank">Asterias Software Solutions</a>`,
          'es-MX': `la empresa <a href="https://asterias.com.mx/" target="_blank">Asterias Software Solutions</a>`,
        },
        summary: {
          'en-US': `Lead of a small team of developers, code reviews, development of tools (<span class="text-danger">utilities, scripts, libraries</span>) for internal usage, design and implementation of <span class="text-danger">internal software architecture</span>, <span class="text-danger">unit testing</span>, and fullstack developer in various types of web applications.`,
          'es-MX': `Líder de un pequeño equipo de desarrolladores, revisiones de código, desarrollo de herramientas (<span class="text-danger">utilidades, scripts, librerías</span>) para uso interno, diseño e implementación de <span class="text- peligro">arquitectura de software interna</span>, <span class="text-danger">pruebas unitarias</span> y desarrollador fullstack en varios tipos de aplicaciones web.`,
        },
      }, // asterias
      edwire: {
        jobTitle: {
          'en-US': `Fullstack Developer`,
          'es-MX': `Desarrollador Fullstack`,
        },
        summary: {
          'en-US': `Contributor in the <a href="https://www.edgraph.com/" target="_blank">EdGraph</a> platform for <span class="text-danger">Education Organizations management</span> and as a <span class="text-danger">Saas</span> for other developers. I developed SPAs, REST APIs and Microservices with gRPC.`,
          'es-MX': `Colaborador en la plataforma <a href="https://www.edgraph.com/" target="_blank">EdGraph</a> para la <span class="text-danger">administración de Organizaciones Educativas</span> y como <span class="text-danger">Saas</span> para otros desarrolladores. Desarrollé SPAs, REST APIs y Microservicios con gRPC.`,
        },
      }, // edwire
      bdi: {
        jobTitle: {
          'en-US': `Fullstack Developer`,
          'es-MX': `Desarrollador Fullstack`,
        },
        summary: {
          'en-US': `Development of web applications with heavy focus on using <span class="text-danger">Azure services</span> (DevOps, Repos, Pipelines, Web Jobs, etc.)`,
          'es-MX': `Desarrollo de aplicaciones web con un fuerte enfoque en el uso de <span class="text-danger">servicios de Azure</span> (DevOps, Repos, Pipelines, Web Jobs, etc.)`,
        },
      }, // bdi
      lnf: {
        jobTitle: {
          'en-US': `Fullstack Developer`,
          'es-MX': `Desarrollador Fullstack`,
        },
        summary: {
          'en-US': `Contributor in the <a href="https://portal.lnfdistributors.com/login" target="_blank">L&F Distributors Portal</a> an online website with an <span class="text-danger">E-Commerce</span>-like platform for customers and an <span class="text-danger">Admin Panel</span> for company staff.`,
          'es-MX': `Colaborador en el <a href="https://portal.lnfdistributors.com/login" target="_blank">L&F Distributors Portal</a> un sitio web en línea con una plataforma <span class="text-danger">E-Commerce</span> para clientes y un <span class="text-danger">Panel de Administración</span> para el personal de la empresa.`,
        },
      }, // bdi
    },
  }, // section
  myFavTech: {
    title: {
      'en-US': 'My Favorite Tech',
      'es-MX': 'Mis Tecnologías Favoritas',
    },
    paragraph1: {
      'en-US': `My preffered stack is <span class="text-danger">MAANC</span> (yes, i just came up with that), or you might know it as:`,
      'es-MX': `Mi stack preferido es <span class="text-danger">MAANC</span> (sí, se me acaba de ocurrir), o puede que lo conozcas como:`,
    },
    paragraph2: {
      'en-US': `But I have also worked with:`,
      'es-MX': `Pero también he trabajado con:`,
    },
    databases: {
      'en-US': 'Databases',
      'es-MX': 'Bases de Datos',
    },
    toolsAndLibs: {
      'en-US': 'Tools and Libraries',
      'es-MX': 'Herramientas y Librerías',
    },
  }, // myFavTech
  sideProjectsSection: {
    title: {
      'en-US': 'Side Projects',
      'es-MX': 'Otros Proyectos',
    },
    vcp: {
      summary: {
        'en-US': `A <span class="text-danger">Paas</span> that offers services such as cron jobs, database hosting, caching, IdP, among others, built with <span class="text-danger">Angular + .NET Core + MongoDB</span>. Still a work in progress, but the most ambitious side project I've worked on.`,
        'es-MX': `Un <span class="text-danger">Paas</span> que ofrece servicios como cron jobs, alojamiento de bases de datos, caché, IdP, entre otros, construido con <span class="text-danger">Angular + .NET Core + MongoDB</span>. Todavía es un trabajo en progreso, pero es el proyecto propio más ambicioso en el que he trabajado.`,
      },
    },
    cbtis15Qr: {
      summary: {
        'en-US': `A hybrid application (web/Android) that integrates <span class="text-danger">sign-up, login, qr code generation, qr code scanner, user profiles, gps tracking and geocoding</span>, built with <span class="text-danger">Ionic + Firebase</span>.`,
        'es-MX': `Una aplicación híbrida (web/Android) que integra <span class="text-danger">registro de cuentas, inicio de sesión, generación de código qr, escáner de código qr, perfiles de usuario, rastreo gps y geocodificación</span>, construida con <span class="text-danger">Ionic + Firebase</span>.`,
      },
    },
    cbtis15Maps: {
      summary: {
        'en-US': `A hybrid application (web/Android) that integrates <span class="text-danger">OpenStreetMaps, gps tracking and gps routing</span>, built with <span class="text-danger">Ionic</span>.`,
        'es-MX': `Una aplicación híbrida (web/Android) que integra <span class="text-danger">OpenStreetMaps, rastreo gps y enrutamiento gps</span>, construida con <span class="text-danger">Ionic</span>.`,
      },
    },
    coffeeShop: {
      summary: {
        'en-US': `An Android application to submit orders to a Coffee Shop, built with <span class="text-danger">Android Studio + SQLite</span>.`,
        'es-MX': `Una aplicación de Android para enviar pedidos a una cafetería, construida con <span class="text-danger">Android Studio + SQLite</span>.`,
      },
    },
    puppiesMemorama: {
      summary: {
        'en-US': `A web application to play the Memorama card game... with puppies! Built with <span class="text-danger">Vue.js</span>.`,
        'es-MX': `Una aplicación web para jugar al juego de cartas Memorama... ¡con perritos! Construido con <span class="text-danger">Vue.js</span>.`,
      },
    },
  }, // sideProjectsSection
  funFactsSection: {
    title: {
      'en-US': 'Fun Facts',
      'es-MX': 'Datos Curiosos',
    },
  }, // section
  workExpCard: {
    at: {
      'en-US': 'at',
      'es-MX': 'en',
    },
  }, // workExpCard
  section: {
    todo: {
      'en-US': 'todo',
      'es-MX': 'todo',
    },
  }, // section
};

const DefaultLocalizedValue = 'Unknown Localization';

export function localizeKey(keyToLocale: string): string {
  const lang = Storage.local.lang.get() ?? EnglishLanguageCode;
  const key = `${keyToLocale}.${lang}`;
  const localized = dot<string>(Locales, key);
  return localized ?? `${DefaultLocalizedValue} (${keyToLocale})`;
}

export function localizePath(pathToLocale: any): string {
  const lang = Storage.local.lang.get() ?? EnglishLanguageCode;
  const localized = pathToLocale[lang];
  return localized ?? DefaultLocalizedValue;
}
