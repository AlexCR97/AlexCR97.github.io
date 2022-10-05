import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { AutoSlideImage } from './components/auto-slide-images/AutoSlideImage';
import { FabOptionDef } from './components/fab/FabOptionDef';
import { Modal } from 'bootstrap';
import { Storage } from 'src/app/storage';
import {
  EnglishLanguageCode,
  Locales,
  localizePath,
} from './localization/locales';

interface MainLinkDef {
  icon: string;
  iconColor: string;
  click: () => void;
}

interface LangDef {
  code: string;
  description: string;
}

interface WorkExperienceItem {
  jobTitle: string;
  companyName: string;
  summary: string;
  jobSchedule: 'Full-time' | 'Part-time';
  jobType: 'Insource' | 'Outsource';
  jobLocation: 'Onshore' | 'Offshore';
}

interface ProjectDef {
  title: string;
  summary: string;
  images: string[];
  websiteLink: string;
  githubLink: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnDestroy {
  readonly sidenavWidth = '250px';

  readonly languages: LangDef[] = [
    {
      code: EnglishLanguageCode,
      description: localizePath(Locales.langModal.optionEnglish),
    },
    {
      code: 'es-MX',
      description: localizePath(Locales.langModal.optionSpanish),
    },
  ];

  readonly mainLinks: MainLinkDef[] = [
    {
      icon: 'linkedin',
      iconColor: '#0a66c2',
      click: () => window.open('https://www.linkedin.com/in/viex/', '_blank'),
    },
    {
      icon: 'github',
      iconColor: '#692a84',
      click: () => window.open('https://github.com/AlexCR97', '_blank'),
    },
    {
      icon: 'google',
      iconColor: '#d6372b',
      click: () => window.open('mailto:pablo.acr97@gmail.com', '_blank'),
    },
  ];

  readonly fabOptions: FabOptionDef[] = [
    {
      icon: 'house',
      label: localizePath(Locales.menuFab.home),
      click: () => this.tryScrollToSection('mainSummary'),
    },
    {
      icon: 'person',
      label: localizePath(Locales.menuFab.aboutMe),
      click: () => this.tryScrollToSection('aboutMeSection'),
    },
    {
      icon: 'briefcase',
      label: localizePath(Locales.menuFab.myExp),
      click: () => this.tryScrollToSection('workExperienceSection'),
    },
    {
      icon: 'code',
      label: localizePath(Locales.menuFab.myFavTech),
      click: () => this.tryScrollToSection('technologiesSection'),
    },
    {
      icon: 'kanban',
      label: localizePath(Locales.menuFab.sideProjects),
      click: () => this.tryScrollToSection('sideProjectsSection'),
    },
    {
      icon: 'emoji-laughing',
      label: localizePath(Locales.menuFab.funFacts),
      click: () => this.tryScrollToSection('funFactsSection'),
    },
  ];

  readonly workExperienceItems1: WorkExperienceItem[] = [
    {
      jobTitle: localizePath(Locales.myWorkExpSection.jobs.asterias.jobTitle),
      companyName: localizePath(
        Locales.myWorkExpSection.jobs.asterias.companyName
      ),
      jobSchedule: localizePath(Locales.myWorkExpSection.fulltime) as any,
      jobType: localizePath(Locales.myWorkExpSection.insource) as any,
      jobLocation: localizePath(Locales.myWorkExpSection.onshore) as any,
      summary: localizePath(Locales.myWorkExpSection.jobs.asterias.summary),
    },
    {
      jobTitle: localizePath(Locales.myWorkExpSection.jobs.edwire.jobTitle),
      companyName: `<a href="https://www.linkedin.com/company/edwire/about/" target="_blank">EdWire</a>`,
      jobSchedule: localizePath(Locales.myWorkExpSection.parttime) as any,
      jobType: localizePath(Locales.myWorkExpSection.outsource) as any,
      jobLocation: localizePath(Locales.myWorkExpSection.offshore) as any,
      summary: localizePath(Locales.myWorkExpSection.jobs.edwire.summary),
    },
  ];

  readonly workExperienceItems2: WorkExperienceItem[] = [
    {
      jobTitle: localizePath(Locales.myWorkExpSection.jobs.bdi.jobTitle),
      companyName: `<a href="http://bditechnology.com/" target="_blank">Bauhaus Dessau Informatika LLC</a>`,
      jobSchedule: localizePath(Locales.myWorkExpSection.parttime) as any,
      jobType: localizePath(Locales.myWorkExpSection.outsource) as any,
      jobLocation: localizePath(Locales.myWorkExpSection.offshore) as any,
      summary: localizePath(Locales.myWorkExpSection.jobs.bdi.summary),
    },
    {
      jobTitle: localizePath(Locales.myWorkExpSection.jobs.lnf.jobTitle),
      companyName: `<a href="https://www.lnfdistributors.com/" target="_blank">L&F Distributors</a>`,
      jobSchedule: localizePath(Locales.myWorkExpSection.parttime) as any,
      jobType: localizePath(Locales.myWorkExpSection.outsource) as any,
      jobLocation: localizePath(Locales.myWorkExpSection.offshore) as any,
      summary: localizePath(Locales.myWorkExpSection.jobs.lnf.summary),
    },
  ];

  readonly prefferedStackItems: AutoSlideImage[] = [
    {
      src: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg',
      alt: 'MongoDB logo',
      title: 'MongoDB',
    },
    {
      src: 'https://angular.io/assets/images/logos/angular/angular.svg',
      alt: 'Angular 2+ logo',
      title: 'Angular 2+',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg',
      alt: 'ASP.NET Core logo',
      title: 'ASP.NET Core',
    },
  ];

  readonly frontendImages: AutoSlideImage[] = [
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
      alt: 'Vue.js logo',
      title: 'Vue.js',
    },
    {
      src: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ionic-icon.png',
      alt: 'Ionic logo',
      title: 'Ionic',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg',
      alt: 'Svelte logo',
      title: 'Svelte',
    },
    {
      src: 'https://www.vectorlogo.zone/logos/jquery/jquery-icon.svg',
      alt: 'jQuery logo',
      title: 'jQuery',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg',
      alt: 'Bootstrap logo',
      title: 'Bootstrap',
    },
    {
      src: 'https://cdn.worldvectorlogo.com/logos/material-ui-1.svg',
      alt: 'Material UI logo',
      title: 'Material UI',
    },
  ];

  readonly databaseItems: AutoSlideImage[] = [
    {
      src: 'https://img.icons8.com/color/480/microsoft-sql-server.png',
      alt: 'SQL Server logo',
      title: 'SQL Server',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png',
      alt: 'SQL Server logo',
      title: 'PostgreSQL',
    },
    {
      src: 'https://cdn.worldvectorlogo.com/logos/redis.svg',
      alt: 'Redis logo',
      title: 'Redis',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/2048px-Sqlite-square-icon.svg.png',
      alt: 'SQLite logo',
      title: 'SQLite',
    },
  ];

  readonly toolsItems: AutoSlideImage[] = [
    {
      src: 'https://raw.githubusercontent.com/gist/Xainey/d5bde7d01dcbac51ac951810e94313aa/raw/6c858c46726541b48ddaaebab29c41c07a196394/PowerShell.svg',
      alt: 'PowerShell logo',
      title: 'PowerShell',
    },
    {
      src: 'https://www.svgrepo.com/show/331370/docker.svg',
      alt: 'Docker logo',
      title: 'Docker',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png',
      alt: 'Azure logo',
      title: 'Azure',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Google-cloud-platform.svg/2048px-Google-cloud-platform.svg.png',
      alt: 'Google Cloud Platform logo',
      title: 'GCP',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      alt: 'AWS logo',
      title: 'AWS',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
      alt: 'PowerBi logo',
      title: 'PowerBi',
    },
    {
      src: 'https://www.vectorlogo.zone/logos/sendgrid/sendgrid-icon.svg',
      alt: 'SendGrid logo',
      title: 'SendGrid',
    },
    {
      src: 'https://www.svgrepo.com/show/349445/mailchimp.svg',
      alt: 'MailChimp logo',
      title: 'MailChimp',
    },
  ];

  readonly sideProjects: ProjectDef[] = [
    {
      title: 'Viex Cloud Platform',
      summary: localizePath(Locales.sideProjectsSection.vcp.summary),
      websiteLink: '#',
      githubLink: 'https://github.com/AlexCR97/Viex.CloudPlatform.Main',
      images: [
        'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I',
        'https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g',
        'https://i.picsum.photos/id/1016/3844/2563.jpg?hmac=WEryKFRvTdeae2aUrY-DHscSmZuyYI9jd_-p94stBvc',
      ],
    },
    {
      title: 'CBTIS 15 QR',
      summary: localizePath(Locales.sideProjectsSection.cbtis15Qr.summary),
      websiteLink: '#',
      githubLink: 'https://github.com/DiracSpace/GPSTracking',
      images: [
        'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I',
        'https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g',
        'https://i.picsum.photos/id/1016/3844/2563.jpg?hmac=WEryKFRvTdeae2aUrY-DHscSmZuyYI9jd_-p94stBvc',
      ],
    },
    {
      title: 'CBTIS 15 Maps',
      summary: localizePath(Locales.sideProjectsSection.cbtis15Maps.summary),
      websiteLink: '#',
      githubLink: 'https://github.com/AlexCR97/CBTIS-15-Maps',
      images: [
        'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I',
        'https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g',
        'https://i.picsum.photos/id/1016/3844/2563.jpg?hmac=WEryKFRvTdeae2aUrY-DHscSmZuyYI9jd_-p94stBvc',
      ],
    },
    {
      title: 'Coffee Shop',
      summary: localizePath(Locales.sideProjectsSection.coffeeShop.summary),
      websiteLink: '#',
      githubLink: 'https://github.com/AlexCR97/Coffee-Shop',
      images: [
        'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I',
        'https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g',
        'https://i.picsum.photos/id/1016/3844/2563.jpg?hmac=WEryKFRvTdeae2aUrY-DHscSmZuyYI9jd_-p94stBvc',
      ],
    },
    {
      title: 'Puppies Memorama',
      summary: localizePath(
        Locales.sideProjectsSection.puppiesMemorama.summary
      ),
      websiteLink: '#',
      githubLink: 'https://github.com/AlexCR97/Puppies-Memorama.git',
      images: [
        'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I',
        'https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g',
        'https://i.picsum.photos/id/1016/3844/2563.jpg?hmac=WEryKFRvTdeae2aUrY-DHscSmZuyYI9jd_-p94stBvc',
      ],
    },
  ];

  private blurObserver?: IntersectionObserver;
  private fadeObserver?: IntersectionObserver;
  private langModal?: Modal;

  ngAfterViewInit() {
    this.blurObserver = this.attachObserverForBlurAnimation();
    this.fadeObserver = this.attachObserverForFadeAnimation();
  }

  ngOnDestroy(): void {
    if (this.blurObserver) {
      this.blurObserver.disconnect();
      this.blurObserver = undefined;
    }

    if (this.fadeObserver) {
      this.fadeObserver.disconnect();
      this.fadeObserver = undefined;
    }

    if (this.langModal) {
      this.langModal.dispose();
      this.langModal = undefined;
    }
  }

  /**
   * Gets the width/height of the images based on Bootstrap's breakpoints.
   *
   * More info at https://getbootstrap.com/docs/5.2/layout/breakpoints/
   */
  get autoSlideImagesSize(): string {
    if (window.innerWidth >= 768) {
      return '100px';
    }

    if (window.innerWidth >= 576) {
      return '75px';
    }

    return '50px';
  }

  isLangSelected(lang: LangDef) {
    const storedLang = Storage.local.lang.get();

    if (storedLang == null) {
      // By default, set English as selected language
      return lang.code == EnglishLanguageCode;
    }

    return storedLang == lang.code;
  }

  onLangFabClicked() {
    if (!this.langModal) {
      this.langModal = new Modal('#langModal');
    }

    this.langModal.show();
  }

  onLangClicked(lang: LangDef) {
    Storage.local.lang.set(lang.code);
    this.langModal?.hide();
    window.location.reload();
  }

  private tryScrollToSection(id: string) {
    const sectionElement = document.getElementById(id);

    if (!sectionElement) {
      return;
    }

    window.scrollTo({
      behavior: 'smooth',
      top: sectionElement.offsetTop,
    });
  }

  private attachObserverForBlurAnimation() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('blur-in');
        } else {
          entry.target.classList.remove('blur-in');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.blur-out');
    hiddenElements.forEach((el) => observer.observe(el));
    return observer;
  }

  private attachObserverForFadeAnimation() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        } else {
          entry.target.classList.remove('fade-in');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.fade-out');
    hiddenElements.forEach((el) => observer.observe(el));
    return observer;
  }
}
