import { Component } from '@angular/core';

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
  readonly sidenavWidth = '230px';

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
      label: 'Technologies I Use',
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
