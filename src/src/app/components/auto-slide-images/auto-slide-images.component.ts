import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Storage } from 'src/app/storage';
import { randomIntFromRange } from 'src/app/utils';
import { AutoSlideImage } from './AutoSlideImage';

@Component({
  selector: 'app-auto-slide-images',
  templateUrl: './auto-slide-images.component.html',
  styleUrls: ['./auto-slide-images.component.scss'],
})
export class AutoSlideImagesComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollArea', { static: true })
  scrollArea!: ElementRef<HTMLElement>;

  @Input() images: AutoSlideImage[] = [];
  @Input() size: string = '100px';

  private intervalSubscription?: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.images = [...this.images, ...this.images, ...this.images]; // TODO Find a better way to do this
  }

  ngAfterViewInit(): void {
    const scrollTimeout = randomIntFromRange(0, 3000);

    setTimeout(() => {
      this.scrollToEnd();
    }, scrollTimeout);
  }

  ngOnDestroy(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
      this.intervalSubscription = undefined;
    }
  }

  get backgroundOverlayStyle() {
    const color = Storage.local.theme.isDark()
      ? 'var(--app-dark-bg)'
      : 'white'

    return {
      background: `linear-gradient(
        90deg,
        ${color} 0%,
        rgba(242, 242, 194, 0) 30%,
        rgba(255, 255, 255, 0) 70%,
        ${color} 100%
      )`,
    }
  }

  private get el() {
    return this.scrollArea.nativeElement;
  }

  private scrollToEnd() {
    // const scrollAmount = randomIntFromRange(1, 2);
    // const scrollInterval = randomIntFromRange(5, 10);
    const scrollAmount = 1;
    const scrollInterval = 5;
    this.intervalSubscription = interval(scrollInterval).subscribe(() => {
      this.el.scrollLeft += scrollAmount;
      if (this.el.offsetWidth + this.el.scrollLeft >= this.el.scrollWidth) {
        this.intervalSubscription?.unsubscribe();
        this.intervalSubscription = undefined;
        setTimeout(() => {
          this.scrollToStart();
        }, 0);
      }
    });
  }

  private scrollToStart() {
    // const scrollAmount = randomIntFromRange(1, 2);
    // const scrollInterval = randomIntFromRange(10, 20);
    const scrollAmount = 1;
    const scrollInterval = 5;
    this.intervalSubscription = interval(scrollInterval).subscribe(() => {
      this.el.scrollLeft -= scrollAmount;
      if (this.el.scrollLeft <= 0) {
        this.intervalSubscription?.unsubscribe();
        this.intervalSubscription = undefined;
        setTimeout(() => {
          this.scrollToEnd();
        }, 0);
      }
    });
  }
}
