import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {

  @Input() icon = 'house'
  @Input() size = 'md'
  @Input() variant?: string

  constructor() { }

  ngOnInit(): void {
  }

  get buttonClass() {
    const classes: string[] = [
      `icon-button-${this.size}`
    ]

    if (this.variant) {
      classes.push(`btn-${this.variant}`)
    }

    return classes
  }
}
