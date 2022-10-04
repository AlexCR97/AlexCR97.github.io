import {
  animate,
  AnimationMetadata,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, HostBinding, Input } from '@angular/core';

export const FadeAnimationDefaultStart = '400ms ease-in';
export const FadeAnimationDefaultEnd = '400ms ease-out';

export const FadeAnimationMetadata: AnimationMetadata[] = [
  trigger('fade', [
    transition(
      ':enter',
      [
        style({
          opacity: '0',
          transform: 'translateX(50%)',
        }),
        animate(
          '{{ start }}',
          style({
            opacity: '1',
            transform: 'translateX(0)',
          })
        ),
      ],
      {
        params: {
          start: FadeAnimationDefaultStart,
        },
      }
    ),
    transition(
      ':leave',
      [
        animate(
          '{{ end }}',
          style({
            opacity: '0',
            transform: 'translateX(-50%)',
          })
        ),
      ],
      {
        params: {
          end: FadeAnimationDefaultEnd,
        },
      }
    ),
  ]),
];

@Component({
  selector: '[app-fade-animation]',
  template: `<ng-content></ng-content>`,
  animations: [FadeAnimationMetadata],
})
export class FadeAnimationComponent {
  @Input() start = FadeAnimationDefaultStart;
  @Input() end = FadeAnimationDefaultEnd;

  @HostBinding('@fade')
  get trigger() {
    const trigger = {
      value: true,
      params: {
        start: this.start,
        end: this.end,
      },
    };

    return trigger;
  }
}
