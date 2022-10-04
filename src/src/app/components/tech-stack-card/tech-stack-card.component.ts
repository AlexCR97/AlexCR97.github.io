import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-stack-card',
  templateUrl: './tech-stack-card.component.html',
  styleUrls: ['./tech-stack-card.component.scss'],
})
export class TechStackCardComponent {
  @Input() src = 'https://www.src.domain/path/to/image.svg';
  @Input() alt = 'Logo';
  @Input() title = 'Title';
  @Input() imgSize = '300px';

  @HostBinding('class')
  readonly hostClass = 'd-block shadow p-4';

  @HostBinding('style')
  get hostStyle() {
    return {
      'border-radius': '20px',
    };
  }
}
