import { Component, Input, OnInit } from '@angular/core';
import { FabOptionDef } from './FabOptionDef';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss'],
})
export class FabComponent implements OnInit {
  @Input() icon = 'plus';
  @Input() variant = 'primary';
  @Input() options: FabOptionDef[] = [];

  collapsed = true;

  constructor() {}

  ngOnInit(): void {}

  onFabOptionClicked(option: FabOptionDef) {
    if (!option.click) {
      return;
    }

    option.click();
    this.collapsed = true;
  }
}
