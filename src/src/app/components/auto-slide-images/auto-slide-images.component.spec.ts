import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSlideImagesComponent } from './auto-slide-images.component';

describe('AutoSlideImagesComponent', () => {
  let component: AutoSlideImagesComponent;
  let fixture: ComponentFixture<AutoSlideImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoSlideImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoSlideImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
