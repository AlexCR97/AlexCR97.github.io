import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeAnimationComponent } from './fade-animation.component';

describe('FadeAnimationComponent', () => {
  let component: FadeAnimationComponent;
  let fixture: ComponentFixture<FadeAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FadeAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FadeAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
