import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardArrivalsComponent } from './card-arrivals.component';

describe('CardArrivalsComponent', () => {
  let component: CardArrivalsComponent;
  let fixture: ComponentFixture<CardArrivalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardArrivalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardArrivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
