import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExpCardComponent } from './work-exp-card.component';

describe('WorkExpCardComponent', () => {
  let component: WorkExpCardComponent;
  let fixture: ComponentFixture<WorkExpCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkExpCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExpCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
