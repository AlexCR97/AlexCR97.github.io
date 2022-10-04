import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  @Input() title = 'Title';
  @Input() summary =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptates perferendis cumque odit harum quos velit optio dolorem esse nihil adipisci explicabo non tempore delectus alias voluptas, sint possimus ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aperiam molestias eius dolor pariatur sequi laboriosam neque odit architecto dolorum ex a fuga ducimus, iste tempora porro magni, tempore quam.';
  @Input() images: string[] = [];
  @Input() websiteLink = '';
  @Input() githubLink = '';

  @HostBinding('class')
  readonly hostClass = 'd-block shadow';

  @HostBinding('style')
  readonly hostStyle = {
    'border-radius': '20px',
  };

  constructor() {}

  ngOnInit(): void {}
}
