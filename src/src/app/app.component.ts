import { Component } from '@angular/core';
import { AutoSlideImage } from './components/auto-slide-images/AutoSlideImage';

interface SectionDef {
  id: string;
  icon: string;
  label: string;
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
export class AppComponent {
  readonly sidenavWidth = '250px';

  readonly sections: SectionDef[] = [
    {
      id: 'aboutMeSection',
      icon: 'person',
      label: 'About Me',
    },
    {
      id: 'workExperienceSection',
      icon: 'briefcase',
      label: 'My Experience',
    },
    {
      id: 'technologiesSection',
      icon: 'code',
      label: 'My Favorite Technologies',
    },
    {
      id: 'sideProjectsSection',
      icon: 'kanban',
      label: 'Side Projects',
    },
    {
      id: 'funFactsSection',
      icon: 'emoji-laughing',
      label: 'Fun Facts',
    },
  ];

  activeSectionId?: string;

  readonly workExperienceItems1: WorkExperienceItem[] = [
    {
      jobTitle: 'Tech Lead / Fullstack Developer',
      companyName: `startup company <a href="https://asterias.com.mx/" target="_blank">Asterias Software Solutions</a>`,
      jobSchedule: 'Full-time',
      jobType: 'Insource',
      jobLocation: 'Onshore',
      summary: `Lead of a small team of developers, code reviews, development of tools (<span class="text-danger">utilities, scripts, libraries</span>) for internal usage, design and implementation of <span class="text-danger">internal software architecture</span>, <span class="text-danger">unit testing</span>, and fullstack developer in various types of web applications.`,
    },
    {
      jobTitle: 'Fullstack Developer',
      companyName: `<a href="https://www.linkedin.com/company/edwire/about/" target="_blank">EdWire</a>`,
      jobSchedule: 'Part-time',
      jobType: 'Outsource',
      jobLocation: 'Offshore',
      summary: `Contributor in the <a href="https://www.edgraph.com/" target="_blank">EdGraph</a> platform for <span class="text-danger">Education Organizations management</span> and as a <span class="text-danger">Saas</span> for other developers. I developed SPAs, REST APIs and Microservices with gRPC.`,
    },
  ];

  readonly workExperienceItems2: WorkExperienceItem[] = [
    {
      jobTitle: 'Fullstack Developer',
      companyName: `<a href="http://bditechnology.com/" target="_blank">Bauhaus Dessau Informatika LLC</a>`,
      jobSchedule: 'Part-time',
      jobType: 'Outsource',
      jobLocation: 'Offshore',
      summary: `Development of web applications with heavy focus on using <span class="text-danger">Azure services</span> (DevOps, Repos, Pipelines, Web Jobs, etc.)`,
    },
    {
      jobTitle: 'Fullstack Developer',
      companyName: `<a href="https://www.lnfdistributors.com/" target="_blank">L&F Distributors</a>`,
      jobSchedule: 'Part-time',
      jobType: 'Outsource',
      jobLocation: 'Offshore',
      summary: `Contributor in the <a href="https://portal.lnfdistributors.com/login" target="_blank">L&F Distributors Portal</a> an online website with an <span class="text-danger">E-Commerce</span>-like platform for customers and an <span class="text-danger">Admin Panel</span> for company staff.`,
    },
  ];

  readonly prefferedStackItems: any[] = [
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
      summary: `A <span class="text-danger">Saas</span> that offers services such as scheduled jobs, database hosting, caching, IdP, among others, built with <span class="text-danger">Angular + .NET Core + MongoDB</span>. Still a work in progress, but the most ambicuos side project I've worked on.`,
      websiteLink: '#',
      githubLink: 'https://github.com/AlexCR97/Viex.CloudPlatform.Main',
      images: [
        'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I',
        'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I',
        'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I',
      ],
    },
    {
      title: 'CBTIS 15 QR',
      summary: `A hybrid application (web/Android) that integrates <span class="text-danger">sign-up, login, qr code generation, qr code scanner, user profiles, gps tracking and geocoding</span>, built with <span class="text-danger">Ionic + Firebase</span>.`,
      websiteLink: '#',
      githubLink: 'https://github.com/DiracSpace/GPSTracking',
      images: [
        'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I',
        'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I',
        'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I',
      ],
    },
    {
      title: 'CBTIS 15 Maps',
      summary: `A hybrid application (web/Android) that integrates <span class="text-danger">OpenStreetMaps, gps tracking and gps routing</span>, built with <span class="text-danger">Ionic</span>.`,
      websiteLink: '#',
      githubLink: 'https://github.com/AlexCR97/CBTIS-15-Maps',
      images: [
        'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I',
        'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I',
        'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I',
      ],
    },
    {
      title: 'Coffee Shop',
      summary: `An Android application to submit orders to a Coffee Shop, built with <span class="text-danger">Android Studio + SQLite</span>.`,
      websiteLink: '#',
      githubLink: 'https://github.com/AlexCR97/Coffee-Shop',
      images: [
        'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I',
        'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I',
        'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I',
      ],
    },
    {
      title: 'Puppies Memorama',
      summary: `A web application to play the Memorama card game... with puppies! Built with <span class="text-danger">Vue.js</span>.`,
      websiteLink: '#',
      githubLink: 'https://github.com/AlexCR97/Puppies-Memorama.git',
      images: [
        'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I',
        'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I',
        'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I',
      ],
    },
  ];

  onSectionButtonClicked(section: SectionDef) {
    const sectionElement = document.getElementById(section.id);

    if (sectionElement) {
      this.activeSectionId = section.id;

      sectionElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }
}
