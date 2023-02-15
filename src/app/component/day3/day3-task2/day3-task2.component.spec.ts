import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3Task2Component } from './day3-task2.component';

describe('Day3Task2Component', () => {
  let component: Day3Task2Component;
  let fixture: ComponentFixture<Day3Task2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day3Task2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day3Task2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
