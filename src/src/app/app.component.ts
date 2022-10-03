import { Component } from '@angular/core';
import { AutoSlideImage } from './components/auto-slide-images/AutoSlideImage';

interface SectionDef {
  id: string;
  icon: string;
  label: string;
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
