import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticlesBgComponent } from './particles-bg.component';

describe('ParticlesBgComponent', () => {
  let component: ParticlesBgComponent;
  let fixture: ComponentFixture<ParticlesBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticlesBgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticlesBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
