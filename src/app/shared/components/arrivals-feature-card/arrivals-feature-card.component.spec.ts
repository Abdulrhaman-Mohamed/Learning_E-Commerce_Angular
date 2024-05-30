import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivalsFeatureCardComponent } from './arrivals-feature-card.component';

describe('ArrivalsFeatureCardComponent', () => {
  let component: ArrivalsFeatureCardComponent;
  let fixture: ComponentFixture<ArrivalsFeatureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArrivalsFeatureCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrivalsFeatureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
