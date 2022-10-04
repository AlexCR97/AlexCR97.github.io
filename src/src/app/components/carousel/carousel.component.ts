import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { randomIntFromRange } from 'src/utils';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit, OnDestroy {
  @Input() images: string[] = [];
  @Input() interval = 2000;
  @Input() offset = randomIntFromRange(0, 5000);

  private currentImageIndex = 0;
  private intervalSubs?: Subscription;

  constructor() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.intervalSubs = interval(this.interval).subscribe(() => {
        if (this.currentImageIndex < this.images.length) {
          this.currentImageIndex += 1;
        }

        if (this.currentImageIndex >= this.images.length) {
          this.currentImageIndex = 0;
        }
      });
    }, this.offset);
  }

  ngOnDestroy(): void {
    if (this.intervalSubs) {
      this.intervalSubs.unsubscribe();
      this.intervalSubs = undefined;
    }
  }

  getImageClass(index: number) {
    return this.currentImageIndex == index ? 'visible' : 'hidden';
  }
}
