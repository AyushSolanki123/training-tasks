import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3Task1Component } from './day3-task1.component';

describe('Day3Task1Component', () => {
  let component: Day3Task1Component;
  let fixture: ComponentFixture<Day3Task1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day3Task1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day3Task1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
