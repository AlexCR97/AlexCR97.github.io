import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-exp-card',
  templateUrl: './work-exp-card.component.html',
  styleUrls: ['./work-exp-card.component.scss'],
})
export class WorkExpCardComponent implements OnInit {
  @Input() jobTitle = 'Job Title';
  @Input() companyName = 'Company Name';
  @Input() jobSchedule = 'Job Schedule';
  @Input() jobType = 'Job Type';
  @Input() jobLocation = 'Job Location';
  @Input() summary =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus impedit quia quibusdam a expedita quos assumenda corporis tenetur magnam eius rem consequatur distinctio vitae est, qui similique neque voluptatum porro? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque distinctio magni deserunt? Atque quaerat soluta cum consequatur ducimus quam vero accusantium corporis eum doloribus sint, sunt, voluptatem, magnam perspiciatis deserunt.';

  @HostBinding('class')
  readonly hostClass = 'shadow p-4';

  constructor() {}

  ngOnInit(): void {}
}
