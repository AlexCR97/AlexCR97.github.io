import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() size = '100px';

  @HostBinding('style')
  get hostStyle() {
    return {
      'background-image': `url("assets/profile-picture.jpeg")`,
      width: this.size,
      height: this.size,
    };
  }

  constructor() {}

  ngOnInit(): void {}
}
