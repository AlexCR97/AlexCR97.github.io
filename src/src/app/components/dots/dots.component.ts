import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dots',
  templateUrl: './dots.component.html',
  styleUrls: ['./dots.component.scss'],
})
export class DotsComponent implements OnInit {
  @Input() startEven = true;
  @Input() count = 2;
  @Input() sizeEven = '10px';
  @Input() sizeOdd = '13px';

  constructor() {}

  ngOnInit(): void {}

  get dots(): any[] {
    return [...Array(this.count).keys()];
  }

  getStyle(index: number) {
    const size = this.startEven
      ? this.getSizeEven(index)
      : this.getSizeOdd(index);

    return {
      width: size,
      height: size,
    };
  }

  private getSizeEven(index: number) {
    return index % 2 == 0 ? this.sizeEven : this.sizeOdd;
  }

  private getSizeOdd(index: number) {
    return (index + 1) % 2 == 0 ? this.sizeEven : this.sizeOdd;
  }
}
