import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyNews2Component } from './weekly-news2.component';

describe('WeeklyNews2Component', () => {
  let component: WeeklyNews2Component;
  let fixture: ComponentFixture<WeeklyNews2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyNews2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyNews2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
