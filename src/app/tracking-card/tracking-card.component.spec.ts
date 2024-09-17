import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingCardComponent } from './tracking-card.component';

describe('TrackingCardComponent', () => {
  let component: TrackingCardComponent;
  let fixture: ComponentFixture<TrackingCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackingCardComponent]
    });
    fixture = TestBed.createComponent(TrackingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
